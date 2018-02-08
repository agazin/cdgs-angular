import { Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { LovConfig } from '../../models/lov/lov-config';
import { StateAdaptor } from '../state-adaptor/state-adaptor';
import { CommonResponse } from '../../models/common-response/common-response';
import { LovService } from '../../services/lov/lov.service';
import { Helpers } from '../../helpers/helpers';
import { Store } from '@ngrx/store';
import { RootState } from '../../models/root-state';
import { LovState } from '../../models/lov/lov-state';
import { WildcardsFormat } from '../../models/lov/lov.enum';

export const BACKSPACE_KEYCODE = 8;
export const ENTER_KEYCODE = 13;
export const TAB_KEYCODE = 9;
export const ESCAPE_KEYCODE = 27;


export class Lov implements OnInit, OnChanges, OnDestroy {
    @Input() required = false;
    @Input() placeHolder = '';
    @Input() lovName: string;
    @Input() lovConfig: LovConfig = initLovConfig();
    @Input() displayField: string;
    @Input() selectField: string;
    @Input() displaySeparator = '-';
    @Input() onRowClickSelectData = true;
    @Input() formData: FormGroup = new FormGroup({});
    @Input() conditionField = '';

    @Output() formDataChange: EventEmitter<any> = new EventEmitter();
    @Output() onSelectLov: EventEmitter<any> = new EventEmitter();
    @Output() onClearLov: EventEmitter<any> = new EventEmitter();
    @Output() onQueryChange: EventEmitter<any> = new EventEmitter();

    state: StateAdaptor<any>;
    query: FormControl = new FormControl();
    displayDialog = false;
    isKeypress = false;
    subscription: Subscription;

    filteredData: any[] = [];
    lovConfigList: LovState;

    constructor(
        protected lovService: LovService,
        protected store$: Store<RootState>,
    ) {
        this.setLovConfigList();
        this.initState();
    }

    ngOnChanges(changes: SimpleChanges) {

        this.lovConfig = { ...this.lovConfig, ...this.lovConfigList[this.lovName] };

        // ตรวจสอบว่า LOV มี condition หรือไม่ ถ้ามีให้ set disable LOV นี้
        if (this.hasCondition() && !this.lovConfig.ignoreCondition) {
            this.disableLov();
        }

        // ตรวจสอบว่า condition ใน lov มีค่าหรือไม่ ถ้ามีค่า ให้ enable LOV
        if (this.hasCondition() && this.conditionNotNull()) {
            this.query.enable();
        }

        if (!this.lovConfig.ignoreCondition) {

            // ตรวจสอบในกรณีที่มีข้อมูลส่งมายัง LOV
            if (this.hasFormData()) {
                if (!this.isKeypress) { // ป้องกันการลบข้อมูลหมดในกรณีที่กดปุ่ม backspace
                    this.query.setValue(this.setDisplayField(this.formData.value));
                }
            } else {
                this.initLovQuery();
            }

            // ตรวจสอบในกรณีที่ LOV มีเงื่อนไขในการค้นหา ถ้าไม่มีข้อมูลของเงื่อนไข ให้ทำการเคลียร์ค่าของ LOV นั้น
            if (!this.conditionNotNull() && this.hasSelectedData()) {
                this.query.setValue(null);
                this.clearLovDataWithTemp();
            }

            if (
                this.hasCondition()
                && this.hasSelectedData()
                && this.conditionNotNull()
                && this.isConditionChange()
            ) {
                this.query.setValue(null);
                this.clearLovDataWithTemp();
            }
        } else {

            if (this.hasFormData()) {
                this.setStateFromParent(this.formData.value);
                this.query.setValue(this.setDisplayField(this.formData.value));
            }

            if (this.hasCondition()
                && this.hasSelectedData()
                && this.conditionNotNull()
                && this.isConditionChange()
            ) {
                this.query.setValue(null);
                this.clearLovDataWithTemp();
            }

        }


    }

    ngOnInit() {

    }

    setState(target: StateAdaptor<any>) {
        this.state = {
            ...this.state,
            ...target,
        };
        return this.state;
    }

    setLovConfigList() {
        this.subscription = this.store$
            .select(rootState => rootState.lov)
            .shareReplay()
            .subscribe(lovConfigList => this.lovConfigList = lovConfigList);
    }

    /**
   * method สำหรับจัดการการแสดงผลของ input field Lov
   * @param selectedRow ข้อมูล Lov ทีเลือก
   */
    setDisplayField(selectedRow: any) {
        if (!selectedRow) {
            return;
        }
        if (this.lovConfig.displayFields.length === 1) {
            return selectedRow[this.lovConfig.displayFields[0]];
        } else {
            if (this.isLovMapFieldsNotNull()) {
                return this.lovConfig.displayFields
                    .map(field => selectedRow[field])
                    .join(this.lovConfig.displaySeparator);
            }
        }
        return '';
    }

    initState() {
        this.state = {
            invalidate: false,
            isFetching: false,
            paginator: {
                count: 0,
                limit: 5,
                offset: 0
            },
            results: [],
            result: {},
            selectedData: {},
            selectedList: [],
            tempData: {},
            tempDataList: [],
        };
    }

    setStateFromParent(selectedData) {
        Object.keys(this.lovConfig.mapFields).map(mapField => {
            const dbField = this.lovConfig.mapFields[mapField];
            this.setState({
                selectedData: {
                    ...this.state.selectedData,
                    [dbField]: selectedData[mapField],
                },
                tempData: {
                    ...this.state.tempData,
                    [dbField]: selectedData[mapField],
                }
            });
        });
    }

    initLovQuery() {
        this.query = this.required
            ? new FormControl(null, Validators.required)
            : new FormControl(null);
    }

    hasFormData() {
        return Object.keys(this.formData.value).length;
    }

    isLovMapFieldsNotNull() {
        const formData = this.formData.getRawValue();
        return this.lovConfig.displayFields
            .reduce((acc, displayField) => acc && formData[displayField]);
    }

    hasCondition() {
        return !!Object.keys(this.lovConfig.lovCondition).length;
    }

    conditionNotNull() {
        const formData = this.formData.getRawValue();
        this.lovConfig.lovCondition = this.lovConfig.lovCondition || {};
        return Object.keys(this.lovConfig.lovCondition)
            .reduce((acc, conditionField) => !!acc && !!formData[conditionField], true);
    }

    findLovDataByCondition(condition: any = {}) {

        if (!!condition['search']) {
            condition = {
                ...condition,
                ...this.extractCondition(),
                search: this.lovService.setSerchKeyPosition(condition['search'], this.lovConfig.wildcardsFormat),
            };
        } else {
            condition = {
                ...condition,
                ...this.extractCondition(),
            };
        }
        this.setState({ isFetching: true });
        return this.lovService
            .findLovDataByCondition<CommonResponse<any>>(this.lovConfig.serviceURI, condition)
            .shareReplay();
    }

    extractCondition() {
        if (!this.lovConfig.lovCondition) {
            return {};
        }
        const conditionFields: string[] = Object.keys(this.lovConfig.lovCondition);
        const formValue = this.formData.value;
        let condition = {};
        if (!!conditionFields.length) {
            conditionFields.forEach(conditionField => {
                const dbField: string = this.lovConfig.lovCondition[conditionField];
                if (formValue[conditionField]) {
                    condition = { ...condition, [dbField]: formValue[conditionField] };
                }
            });
        }
        return condition;
    }

    hasQuery() {
        return !!this.query.value;
    }

    hasSelectedData() {
        return !!Object.keys(this.state.selectedData).length;
    }

    selectLovData(selectedData: any, fromParent = false) {
        this.isKeypress = false;
        Object.keys(this.lovConfig.mapFields).forEach(mapField => {
            const dbField = this.lovConfig.mapFields[mapField];
            this.formData.patchValue({
                [mapField]: fromParent ? selectedData[mapField] : selectedData[dbField]
            });
        });
        this.setState({ selectedData, tempData: { ...selectedData } });
        this.formDataChange.emit(Helpers.copyFormGroup(this.formData));
    }

    clearSearchQuery() {
        this.query.reset();
    }

    onKeypress(event: KeyboardEvent) { }

    clearLovData() {
        this.filteredData = [];
        this.setState({ selectedData: {} });
        Object.keys(this.lovConfig.mapFields).map(field => {
            if (!this.lovConfig.relatedFields.includes(field)) {
                this.formData.patchValue({
                    [field]: null,
                });
            }
        });

        this.formDataChange.emit(Helpers.copyFormGroup(this.formData));
    }

    clearLovDataWithTemp() {
        this.clearLovData();
        this.setState({
            tempData: {},
        });
    }

    disableLov() {
        this.query.disable();
    }

    enableLov() {
        this.query.enable();
    }

    isConditionChange() {
        const rawData = this.formData.getRawValue();
        let isConditionChange = false;
        for (const field of Object.keys(this.lovConfig.lovCondition)) {
            const dbField = this.lovConfig.lovCondition[field];
            if (rawData[field] !== this.state.selectedData[dbField]) {
                isConditionChange = true;
                break;
            }
        }
        return isConditionChange;
    }

    ngOnDestroy() {
        if (!!this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}

export const initLovConfig = (): LovConfig => {
    return {
        displaySeparator: '-',
        ignoreCondition: false,
        lovCondition: {},
        tableConfig: {
            columnDefs: [],
            tableName: null,
        },
        mapFields: {},
        displayFields: [],
        relatedFields: [],
        serviceURI: '',
        wildcardsFormat: WildcardsFormat.BOTH,
    };
};

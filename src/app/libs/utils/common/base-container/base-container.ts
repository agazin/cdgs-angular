import { Router } from '@angular/router';
import { NavigationExtras, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FormGroup, FormControl } from '@angular/forms';

import { GotoQuery, GotoAdd, GotoEdit } from '../../store/actions/program-mode.action';
import { StateAdaptor } from '../state-adaptor/state-adaptor';
import { AppState } from '../../../../shared/models/app-state/app-state';
import { FwMessageService } from '../../services/fw-message/fw-message.service';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';

export abstract class BaseContainer<T> {

    state$: BehaviorSubject<StateAdaptor<T>>;

    constructor(
        protected router$: Router,
        protected route$: ActivatedRoute,
        protected store$: Store<AppState>,
        protected FwMessage$: FwMessageService,
    ) { }

    init() { }
    save(data) { }
    add(data) { }
    search(data) { }
    edit(data) { }
    print(data) { }
    delete(data: T[]) { }
    deleteList(data: number[]) { }
    back() { }
    setDataModel(data = {}) { }
    setFormData(data = {}) { }
    rowClick(data) { }
    submitForm(data) { }

    setState(state: StateAdaptor<T>) {
        this.state$.next({ ...this.state$.value, ...state });
    }

    initialState(state: StateAdaptor<T>) {
        this.state$ = new BehaviorSubject(state);
    }

    navigateTo(route: string, options: NavigationExtras = { relativeTo: this.route$ }) {
        this.router$.navigate([route], options);
    }

    saveAndGoBack(data) {
        this.save(data);
        this.navigateTo('../');
    }

    toSearch() {
        this.navigateTo('../search');
        this.switchToSearchMode();
    }

    toAdd() {
        this.navigateTo('../add');
        this.switchToAddMode();
    }

    toEdit() {
        this.navigateTo('../edit');
        this.switchToEditMode();
    }

    switchToAddMode() {
        this.store$.dispatch(new GotoAdd());
    }

    switchToEditMode() {
        this.store$.dispatch(new GotoEdit());
    }

    switchToSearchMode() {
        this.store$.dispatch(new GotoQuery());
    }


    onNextPage({ first, rows }: LazyLoadEvent) { }

    sort({ sortField, sortOrder }: LazyLoadEvent) { }

    protected sortDetail({ sortField, sortOrder }: LazyLoadEvent): string {
        let sortOrderTxt = '';
        if (sortOrder === -1) {
            sortOrderTxt = '[desc]';
        } else {
            sortOrderTxt = '[asc]';
        }
        return sortField + sortOrderTxt;
    }

    createForm(formConfig: { [key: string]: any[] }) {
        return Object.keys(formConfig).reduce((formGroup, formField) => {
            formGroup.addControl(formField, new FormControl(...formConfig[formField]));
            return formGroup;
        }, new FormGroup({}));
    }

    initForm() { }

    resetFormModel() { }

    validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            console.log(control);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }
}

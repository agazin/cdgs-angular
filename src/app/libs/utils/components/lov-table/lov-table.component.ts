import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { LovService } from '../../services/lov/lov.service';
import { LOV_CONTEXT_URL } from '../../common/context-url/context-url';
import { StateAdaptor } from '../../common/state-adaptor/state-adaptor';
import { Lov, BACKSPACE_KEYCODE, ENTER_KEYCODE, TAB_KEYCODE } from '../../common/base-lov/lov';
import { CommonResponse } from '../../models/common-response/common-response';
import { Helpers } from '../../helpers/helpers';
import { RootState } from '../../models/root-state';



@Component({
  selector: 'cdgs-lov-table',
  templateUrl: './lov-table.component.html',
  styleUrls: ['./lov-table.component.scss'],
  providers: [LOV_CONTEXT_URL, LovService],
})
export class LovTableComponent extends Lov {

  dialogQuery: FormControl = new FormControl(null);

  constructor(
    protected lovService: LovService,
    protected store$: Store<RootState>,
  ) {
    super(lovService, store$);
    this.initState();
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

  hasFormData() {
    return Object.keys(this.formData.value).length;
  }

  onKeypress(event: KeyboardEvent) {
    const KEY_ID = event.keyCode;
    switch (KEY_ID) {
      case BACKSPACE_KEYCODE:
        if (!!!this.query.value) { // if empty query
          this.clearLovDataWithTemp();
        }
        break;
      case ENTER_KEYCODE:
        this.search();
        break;
      case TAB_KEYCODE:
        this.search();
        break;
      default:
        break;
    }
  }

  /**
   * ทำงานเมื่อคลิกปุ่มแว่นขยาย การทำงานจะไปเรียก service findLovDataByCondition ถ้ามีข้อมูล 1 row จะทำการ select ข้อมูล
   * ถ้ามี row มากกว่า 2 จะแสดง popup ขึ้นมา
   */
  search() {
    if (!this.hasQuery()) {
      this.openDialog();
      return;
    } else {
      this.setState({ isFetching: true, });
      this.findLovDataByCondition({ search: this.query.value, limit: 5 })
        .do((res) => {
          if (this.hasSingleRow(res)) {
            this.setState({ isFetching: false, });
            const { selectedData } = this.setState({ selectedData: res.results[0] });
            this.submitDialog(selectedData);
          } else {
            this.openDialog();
            this.dialogQuery.setValue(this.query.value);
            this.setState({
              isFetching: false,
              paginator: res.paginator,
              results: res.results,
            });
          }
        })
        .subscribe();
    }
  }

  hasSingleRow(resposne: CommonResponse<any>) {
    return resposne.paginator.count === 1;
  }

  /**
   * method สำหรับเลือกข้อมูลจาก Lov
   * @param selectedData ข้อมูลของ Lov ที่เลือก
   */
  submitDialog(selectedData) {
    this.setState({ selectedData });
    if (!this.hasSelectedData()) {
      this.closeDialog();
      return;
    }
    this.selectLovData(selectedData);
    this.dialogQuery.setValue(null);
    this.query.setValue(this.setDisplayField(selectedData));
    this.closeDialog();
  }

  cancelDialog() {
    this.initState();
    this.closeDialog();
    this.dialogQuery.setValue(null);
  }

  openDialog() {
    this.displayDialog = true;
  }

  closeDialog() {
    this.displayDialog = false;
  }

  clear() {
    this.clearSearchQuery();
    this.initState();
  }

  /**
   * method สำหรับเรียก service ค้นหาข้อมูลของ LOV
   * @param offset ตำแหน่งเริ่มต้นของ lov
   * @param limit จำนวนของ lov ที่ต้องการเรียกดู
   */
  searchDialog(offset: number = 0, limit: number = 5) {
    const search = this.dialogQuery.value;
    this.setState({ isFetching: true });
    this.findLovDataByCondition({ search, offset, limit })
      .do((res) => {
        this.setState({
          isFetching: false,
          paginator: res.paginator,
          results: res.results,
        });
      })
      .subscribe();
  }

  /**
   * method สำหรับจัดการเรียกข้อมูลเมื่อผู้ใช้งานทำการคลิกหมายเลขจาก paginator
   */
  onNextPage({ first, rows }: LazyLoadEvent) {
    if (this.state.paginator.offset !== first) {
      this.searchDialog(first, rows);
    }
  }

  clickRow({ data }: { originalEvent: Event, data: any }) {
    if (!this.onRowClickSelectData) {
      return;
    }
    this.submitDialog(data);
  }

}

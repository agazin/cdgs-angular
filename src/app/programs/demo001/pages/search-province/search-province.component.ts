import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ProvinceService } from '../../services/province/province.service';
import { StateAdaptor } from '../../../../libs/utils/common/state-adaptor/state-adaptor';
import { Province } from '../../models/province/Province';
import { BaseContainer } from '../../../../libs/utils/common/base-container/base-container';
import { AppState } from '../../../../shared/models/app-state/app-state';
import { FwMessageService } from '../../../../libs/utils/services/fw-message/fw-message.service';

@Component({
  selector: 'cdgs-search-province',
  templateUrl: './search-province.component.html',
  styleUrls: ['./search-province.component.scss']
})
export class SearchProvinceComponent extends BaseContainer<Province> implements OnInit {

  searchForm: FormGroup;
  dataList: Observable<Province[]>;

  constructor(
    protected router$: Router,
    protected route$: ActivatedRoute,
    protected store$: Store<AppState>,
    protected FwMessage$: FwMessageService,
    private provinceService: ProvinceService,
    private fb: FormBuilder,
  ) {
    super(router$, route$, store$, FwMessage$);
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.searchForm = this.fb.group({
      provinceCode: [null],
      provinceDesc: [null],
    });
  }

  findProvinceByCondition() {
    this.dataList = this.provinceService
      .findByCondition(this.searchForm.value, 0, 100);
  }

  clearData() {
    this.searchForm.reset();
    this.dataList = Observable.of<Province[]>([]);
  }

  onInsertRow() {
    this.toAdd();
  }

  onRowClick(selectedRow: Province) {
    this.provinceService.setSelectedRow(selectedRow);
    this.toEdit();
  }

}

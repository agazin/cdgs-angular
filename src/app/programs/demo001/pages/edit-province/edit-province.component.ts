import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { BaseContainer } from '../../../../libs/utils/common/base-container/base-container';
import { StateAdaptor } from '../../../../libs/utils/common/state-adaptor/state-adaptor';
import { Province } from '../../models/province/Province';
import { AppState } from '../../../../shared/models/app-state/app-state';
import { FwMessageService } from '../../../../libs/utils/services/fw-message/fw-message.service';
import { ProvinceService } from '../../services/province/province.service';

@Component({
  selector: 'cdgs-edit-province',
  templateUrl: './edit-province.component.html',
  styleUrls: ['./edit-province.component.scss']
})
export class EditProvinceComponent extends BaseContainer<StateAdaptor<Province>> implements OnInit {

  editForm: FormGroup;

  constructor(
    protected router$: Router,
    protected route$: ActivatedRoute,
    protected store$: Store<AppState>,
    protected FwMessage$: FwMessageService,
    private fb: FormBuilder,
    private provinceService: ProvinceService,
  ) {
    super(router$, route$, store$, FwMessage$);
  }

  ngOnInit() {
    this.initForm();
    this.setFormData();
  }

  initForm() {
    this.editForm = this.fb.group({
      provinceCode: [null, Validators.required],
      provinceDesc: [null, Validators.required],
      actflag: [null, Validators.required],
      id: [null],
      provinceSeqno: [null],
      version: [null],
      startDate: [null],
      endDate: [null],
    });
  }

  setFormData() {
    this.provinceService.getSelectedRow()
      .subscribe(selectedRow => {
        this.editForm.patchValue(selectedRow);
      });
  }

  editProvince() {
    this.provinceService
      .editProvince(this.editForm.value)
      .subscribe((result) => {
        this.FwMessage$.success();
      }, (error) => {
        this.FwMessage$.error();
        this.toSearch();
      });
  }

}

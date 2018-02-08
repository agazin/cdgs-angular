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
// import * as cuid from 'cuid';


@Component({
  selector: 'cdgs-add-province',
  templateUrl: './add-province.component.html',
  styleUrls: ['./add-province.component.scss']
})
export class AddProvinceComponent extends BaseContainer<StateAdaptor<Province>> implements OnInit {

  addForm: FormGroup;

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
  }

  initForm() {
    this.addForm = this.fb.group({
      id: [`${new Date().getTime()}`],
      provinceCode: [null, Validators.required],
      provinceDesc: [null],
      actflag: [null],
    });
  }

  addProvince() {
    this.provinceService
      .addProvince(this.addForm.value)
      .subscribe((result) => {
        // console.log(result);
        this.FwMessage$.success();
        this.addForm.reset();
      }, (error) => {
        // console.log(error);
        this.FwMessage$.error();
      });
  }

}

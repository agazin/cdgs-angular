import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Province } from '../../models/province/Province';
import { BaseForm } from '../../../../libs/utils/common/base-form/base-form';

@Component({
  selector: 'cdgs-province-form',
  templateUrl: './province-form.component.html',
  styleUrls: ['./province-form.component.scss']
})
export class ProvinceFormComponent extends BaseForm implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}

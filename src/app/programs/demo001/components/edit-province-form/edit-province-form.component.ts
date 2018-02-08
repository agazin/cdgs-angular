import { Component, OnInit } from '@angular/core';
import { BaseForm } from '../../../../libs/utils/common/base-form/base-form';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'cdgs-edit-province-form',
  templateUrl: './edit-province-form.component.html',
  styleUrls: ['./edit-province-form.component.scss']
})
export class EditProvinceFormComponent extends BaseForm implements OnInit {

  statusOptions: SelectItem[];

  constructor() {
    super();
  }

  ngOnInit() {
    this.statusOptions = [
      { label: 'ใช้งาน', value: 'Y' },
      { label: 'ไม่ใช้งาน', value: 'N' },
    ];
  }

}

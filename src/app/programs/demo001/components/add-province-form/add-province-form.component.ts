import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';
import { BaseForm } from '../../../../libs/utils/common/base-form/base-form';

@Component({
  selector: 'cdgs-add-province-form',
  templateUrl: './add-province-form.component.html',
  styleUrls: ['./add-province-form.component.scss']
})
export class AddProvinceFormComponent extends BaseForm implements OnInit {

  statusOptions: SelectItem[];

  constructor() {
    super();
  }

  ngOnInit() {
    this.statusOptions = [
      { label: 'ใช้งาน', value: 'Y' },
      { label: 'ไม่ใช้งาน', value: 'N' }
    ];
  }

}

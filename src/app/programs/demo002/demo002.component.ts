import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'cdgs-demo002',
  templateUrl: './demo002.component.html',
  styleUrls: ['./demo002.component.scss']
})
export class Demo002Component implements OnInit {

  lov1Form: FormGroup;
  lov2Form: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.lov1Form = this.fb.group({
      provinceId: [null],
      provinceDetail: [null],
    });

    this.lov2Form = this.fb.group({
      provinceId: [null],
      provinceDetail: [null],
    });
  }

}

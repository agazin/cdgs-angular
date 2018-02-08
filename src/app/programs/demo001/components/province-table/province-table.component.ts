import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Province } from '../../models/province/Province';

@Component({
  selector: 'cdgs-province-table',
  templateUrl: './province-table.component.html',
  styleUrls: ['./province-table.component.scss']
})
export class ProvinceTableComponent implements OnInit {

  @Input() dataList: Province[] = [];

  @Output() insertRow: EventEmitter<any> = new EventEmitter();
  @Output() rowClick: EventEmitter<Province> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickInsertRow() {
    this.insertRow.emit();
  }

  clickRow(event: { originalEvent: Event, data: Province }) {
    this.rowClick.emit(event.data);
  }

}

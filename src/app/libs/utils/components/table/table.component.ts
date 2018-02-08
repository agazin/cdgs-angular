import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'cdgs-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() programMode: string;
  @Output() onInsertRow: EventEmitter<any> = new EventEmitter();
  @Output() onDeleteRow: EventEmitter<any> = new EventEmitter();

  @Input() validButtonAdd: boolean;
  @Input() validButtonDel: boolean;

  constructor() { }

  ngOnInit() {
  }

  insertRow() {
    this.onInsertRow.emit();
  }

  deleteRow() {
    this.onDeleteRow.emit();
  }

}

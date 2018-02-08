import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cdgs-report-button',
  templateUrl: './report-button.component.html',
  styleUrls: ['./report-button.component.scss']
})
export class ReportButtonComponent implements OnInit {

  @Input() label = 'พิมพ์รายงาน';
  @Input() disabled = false;
  @Input() iconPos = 'left';
  @Output() click: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.click.emit();
  }

}

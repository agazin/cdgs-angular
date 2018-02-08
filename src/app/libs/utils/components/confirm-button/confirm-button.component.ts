import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'cdgs-confirm-button',
  templateUrl: './confirm-button.component.html',
  styleUrls: ['./confirm-button.component.scss'],
  providers: [ConfirmationService],
})
export class ConfirmButtonComponent implements OnInit {

  @Input() label = 'Confirm';
  @Input() message = 'ยืนยันการดำเนินการ';
  @Input() header = 'ข้อความ';
  @Input() icon = 'fa fa-question-circle';
  @Input() disableButton: boolean;

  @Output() onAccept: EventEmitter<any> = new EventEmitter();
  @Output() onReject: EventEmitter<any> = new EventEmitter();
  @Input() iconButton = 'fa-check';

  displayDialog = false;

  constructor(
    private confirmService: ConfirmationService,
  ) { }

  ngOnInit() {
  }

  confirm() {
    this.confirmService.confirm({
      message: this.message,
      header: this.header,
      icon: this.icon,
      accept: () => this.onAccept.emit(),
      reject: () => this.onReject.emit(),
    });

  }

}

import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { RootState } from '../../models/root-state';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'cdgs-button-panel',
  templateUrl: './button-panel.component.html',
  styleUrls: ['./button-panel.component.scss']
})
export class ButtonPanelComponent implements OnInit, OnDestroy {

  @Input() position = 'ceneter';
  @Output() onSearch: EventEmitter<any> = new EventEmitter();
  @Output() onAdd: EventEmitter<any> = new EventEmitter();
  @Output() onEdit: EventEmitter<any> = new EventEmitter();
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  @Output() onCancel: EventEmitter<any> = new EventEmitter();

  @Input() inputValid: boolean;

  @Input() mode: string;
  programMode$: Observable<string>;
  screenWidth = document.body.clientWidth;
  subscription: Subscription;

  @Input() deleteMessage: string;
  @Input() deleteHeader: string;
  @Output() onAccept: EventEmitter<any> = new EventEmitter();
  @Output() onReject: EventEmitter<any> = new EventEmitter();

  constructor(
    private store$: Store<RootState>,
  ) { }

  ngOnInit() {

    this.subscription = Observable.fromEvent(window, 'resize')
      .subscribe(() => this.screenWidth = document.body.clientWidth);
  }

  search() {
    this.onSearch.emit();
  }

  add() {
    this.onAdd.emit();
  }

  edit() {
    this.onEdit.emit();
  }

  delete() {
    this.onDelete.emit();
  }

  cancel() {
    this.onCancel.emit();
  }

  isMobileScreen() {
    return this.screenWidth < 641;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

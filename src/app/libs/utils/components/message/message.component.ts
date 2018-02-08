import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { RootState } from '../../models/root-state';
import { MessageState } from '../../models/message';
import { ErrorMessage } from '../../store/actions/message.action';
import { Message } from 'primeng/components/common/message';

@Component({
  selector: 'cdgs-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit, OnDestroy {

  /**
   * type of message
   * default is grown message
   * another is dialog
   */
  @Input() messageType = 'dialog';

  message$: Observable<MessageState>;
  message: Message = {};
  hasMessage = false;
  subscription: Subscription;

  constructor(
    private store$: Store<RootState>,
  ) { }

  ngOnInit() {
    this.message$ = this.store$.select(appStore => appStore.message);
    this.isMessageExist();
  }

  isMessageExist() {
    this.subscription = this.message$
      .subscribe(msgState => {
        this.hasMessage = !!msgState.message.length;
        this.message = this.hasMessage ? msgState.message[0] : {};
      });
  }

  closeDialog() {
    this.hasMessage = false;
  }

  ngOnDestroy() {
    if (!!!this.subscription) { // subscription not null
      this.subscription.unsubscribe();
    }
  }

}

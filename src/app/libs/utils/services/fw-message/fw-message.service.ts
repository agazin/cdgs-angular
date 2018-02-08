import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../../models/root-state';
import { SuccessMessage, InfoMessage, WarningMessage, ErrorMessage } from '../../store/actions/message.action';

@Injectable()
export class FwMessageService {

  constructor(
    private store$: Store<RootState>
  ) { }

  success(message = 'ข้อความ สำเร็จ') {
    this.store$.dispatch(new SuccessMessage(message));
  }

  info(message = 'ข้อความ รายละเอียด') {
    this.store$.dispatch(new InfoMessage(message));
  }

  warning(message = 'ข้อความแจ้งเตือน') {
    this.store$.dispatch(new WarningMessage(message));
  }

  error(message = 'เกิดข้อผิดพลาด') {
    this.store$.dispatch(new ErrorMessage(message));
  }

}

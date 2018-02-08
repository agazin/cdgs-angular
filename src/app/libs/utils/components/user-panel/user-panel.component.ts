import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserDetail } from '../../models/user/user-detail';

@Component({
  selector: 'cdgs-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {

  @Input() userDetail: Observable<UserDetail>;

  constructor() { }

  ngOnInit() {
    this.userDetail = Observable.of<UserDetail>({
      roleName: 'developer',
      userId: '000000',
      userName: 'แอมิน ผู้ใช้งาน',
      roleId: 0,
    });
  }

}

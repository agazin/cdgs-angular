import { Component, OnInit } from '@angular/core';
import { style, transition, trigger, state, animate } from '@angular/animations';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { RootState } from './libs/utils/models/root-state';
import { ReportState } from './libs/utils/models/report/index';
import { AuthService } from './libs/utils/auth/auth.service';
import { environment } from '../environments/environment';
import { FetchLovConfig } from './libs/utils/store/actions/lov.action';

@Component({
  selector: 'cdgs-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isAuthenticated: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private store$: Store<RootState>,
  ) {
  }

  ngOnInit() {
    this.setLovConfig();
    this.isAuthenticated = Observable.of(true);
    if (environment.production) {
      this.setKeycloakAuthentication();
    }
  }

  setKeycloakAuthentication() {
    this.authService.keyCloakAuthen();
    this.isAuthenticated = this.authService.isAuthenticated;
  }

  setLovConfig() {
    this.store$.dispatch(new FetchLovConfig());
  }

}

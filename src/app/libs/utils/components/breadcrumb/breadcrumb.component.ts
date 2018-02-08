import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from 'primeng/primeng';
import { RootState } from '../../models/root-state';
import { BreadcrumbNavigateById } from '../../store/actions/menu.action';



@Component({
  selector: 'cdgs-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumb$: Observable<MenuItem[]>;
  home: MenuItem;

  constructor(private store$: Store<RootState>) { }

  ngOnInit() {
    this.init();
    this.definedHome();
  }

  init() {
    this.breadcrumb$ = this.store$
      .select(rootState => rootState.menu.breadcrumb)
      .map(breadcrumb =>
        breadcrumb.map(item => ({
          ...item,
          command: (ev) => this.clickBreadcrumb(+item.id),
        })));
  }

  clickBreadcrumb(menuId: number) {
    this.store$.dispatch(new BreadcrumbNavigateById(menuId));
  }

  definedHome() {
    this.home = {
      id: null,
      command: (ev) => this.clickBreadcrumb(null),
    };
  }

}

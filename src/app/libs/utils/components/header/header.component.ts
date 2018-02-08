import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, state, animate } from '@angular/animations';
import { Store } from '@ngrx/store';

import { RootState } from '../../models/root-state';

@Component({
  selector: 'cdgs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('menuCollapse', [
      state('collapse', style({
        height: '0',
        display: 'none',
      })),
      state('expand', style({
        display: 'block',
        height: '*',
      })),
      transition('expand => collapse', animate('100ms ease-out')),
      transition('collapse => expand', animate('100ms ease-in')),
    ])
  ]
})
export class HeaderComponent implements OnInit {

  isReportPanelOpen = false;
  collapseMenuState = 'collapse';
  isExpand = false;

  constructor(
    private store$: Store<RootState>
  ) { }

  ngOnInit() {
  }

  toggleCollapseMenu() {
    if (!this.isExpand) {
      this.collapseMenuState = 'expand';
    } else {
      this.collapseMenuState = 'collapse';
    }
    this.isExpand = !this.isExpand;

  }

}

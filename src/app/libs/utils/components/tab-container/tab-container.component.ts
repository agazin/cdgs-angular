import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'cdgs-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss']
})
export class TabContainerComponent implements OnInit {

  @Input() data: MenuItem[];

  constructor() { }

  ngOnInit() {
  }

}

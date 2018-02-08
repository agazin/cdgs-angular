import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cdgs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() header: string;
  @Input() style: any;
  @Input() styleClass: string;

  constructor() { }

  ngOnInit() {
  }

}

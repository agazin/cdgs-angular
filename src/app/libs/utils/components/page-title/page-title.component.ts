import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'cdgs-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {

  @Input() text: string;

  constructor(
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle(this.text);
  }

}

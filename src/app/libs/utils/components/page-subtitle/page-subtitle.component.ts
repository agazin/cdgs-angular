import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'cdgs-page-subtitle',
  templateUrl: './page-subtitle.component.html',
  styleUrls: ['./page-subtitle.component.scss']
})
export class PageSubtitleComponent implements OnInit {

  @Input() text: string;

  constructor(
    private title: Title
  ) { }

  ngOnInit() {
    const mainTitle = this.title.getTitle();
    this.title.setTitle(`${mainTitle} | ${this.text}`);
  }

}

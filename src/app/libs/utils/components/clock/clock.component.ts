import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { getWeekDaysByLocale } from '../../constants/weekdays.constant';
import { getMonthByLocale } from '../../constants/months.constant';

@Component({
  selector: 'cdgs-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  dateTimeText$: Observable<string>;
  weekDays: string[] = getWeekDaysByLocale('th');
  months: string[] = getMonthByLocale('th');
  date = new Date();

  constructor() { }

  ngOnInit() {

    this.dateTimeText$ = Observable.of('test');
    this.initClock();
  }

  initClock() {
    const DAY = this.weekDays[this.date.getDay()];
    const DATE = this.date.getDate();
    const MONTH = this.months[this.date.getMonth()];
    const BHUDDIST_YEAR = this.date.getFullYear() + 543;
    let HOURS = this.date.getHours();
    let MINUTES = this.date.getMinutes();
    let SECONDS = this.date.getSeconds();
    this.dateTimeText$ = Observable.interval(1000)
      .map((sec) => {
        SECONDS = this.calculateTime(SECONDS, 60);
        MINUTES = this.calculateTime(MINUTES, 60, SECONDS);
        HOURS = this.calculateTime(HOURS, 24, MINUTES);
        return this.formatDate(DAY, DATE, MONTH, BHUDDIST_YEAR, HOURS, MINUTES, SECONDS);
      }).startWith(this.formatDate(DAY, DATE, MONTH, BHUDDIST_YEAR, HOURS, MINUTES, SECONDS));
  }

  calculateTime(start: number, end: number, CurrTimePrevUit?: number) {
    if (!!CurrTimePrevUit) {
      start = CurrTimePrevUit === 0 ? start + 1 : start;
      return start >= end ? 0 : start;
    } else {
      start++;
      return start >= end ? 0 : start;
    }
  }

  formatDigit(digit: number) {
    return digit <= 9 ? `0${digit}` : `${digit}`;
  }

  formatDate(DAY: string, DATE: number, MONTH: string, BHUDDIST_YEAR: number,
    HOURS: number, MINUTES: number, SECONDS: number) {
    return `วัน${DAY} ที่ ${DATE} ${MONTH} พ.ศ.${BHUDDIST_YEAR}
        เวลา: ${this.formatDigit(HOURS)}:${this.formatDigit(MINUTES)}:${this.formatDigit(SECONDS)} น.`;
  }

}

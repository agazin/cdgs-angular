import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'cdgs-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit, OnChanges {

  @Input() condition: object;
  @Input() total = 100;
  @Input() current = 0;
  @Input() withButton = true;
  @Input() iconPos = 'left';
  @Input() label = 'ประมวลผล';

  @Output() onSuccess: EventEmitter<any> = new EventEmitter();
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();
  @Output() onError: EventEmitter<any> = new EventEmitter();
  @Output() process: EventEmitter<any> = new EventEmitter();

  progressPercentage: number;
  display = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.progressPercentage = this.calculatePercentage(this.current, this.total);
  }

  ngOnInit() {
  }

  onClick() {
    this.process.emit();
    this.processPercentage();

  }

  isOnProgress(currentPercentage: number) {
    return currentPercentage < 100;
  }

  calculatePercentage(curr: number, total: number) {
    const percentage = Math.floor((curr * 100) / total);
    return percentage < 100 ? percentage : 100;
  }

  processPercentage() {
    if (this.isOnProgress(this.progressPercentage)) {
      this.display = true;
      this.update();
    } else {
      this.success();
    }
  }

  success() {
    this.onSuccess.emit();
  }

  update() {
    Observable.interval(2000)
      .do(() => this.onUpdate.emit())
      .do(() => this.display = this.progressPercentage < 100)
      .takeWhile(() => this.progressPercentage < 100)
      .subscribe();
  }

}

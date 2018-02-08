import { Component, OnInit, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'cdgs-show-errors',
  templateUrl: './show-errors.component.html',
  styleUrls: ['./show-errors.component.scss']
})
export class ShowErrorsComponent implements OnInit {

  private static readonly errorMessage = {
    'required': () => 'This field is required',
    'minlength': (params) => 'The min numbber of characters is ' + params.requiredLength,
    'maxlength': (params) => 'The max allowed number of characters is ' + params.requiredLength,
    'citizenId': (params) => params.message
  };

  @Input()
  private control: AbstractControlDirective | AbstractControl;

  constructor() { }

  ngOnInit() {
  }

  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched);
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }

  getMessage(type: string, params: any) {
    return ShowErrorsComponent.errorMessage[type](params);
  }
}

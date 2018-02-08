import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cdgs-input-panel',
  templateUrl: './input-panel.component.html',
  styleUrls: ['./input-panel.component.scss']
})
export class InputPanelComponent implements OnInit {

  @Input() inputValid = true;
  @Input() label: string;
  @Input() invalidMsg: string;
  @Input() msgPosition = 'horizon';
  @Input() required = false;
  @Input() labelPosition;
  @Input() edituig: string;
  classUiFormControl: string;

  constructor() { }

  ngOnInit() {
    this.calulateClassUi();
  }

  calulateClassUi() {
    const regexp = new RegExp('[0-9]');
    if (this.edituig !== undefined) {
      if (this.edituig.search(regexp) !== -1) {
        this.classUiFormControl = 'ui-g-' + (Number.parseInt('12') -
          Number.parseInt(this.edituig.charAt(this.edituig.search(regexp)))) + ' ui-md-12 ui-sm-12 ui-g-nopad';
      }

    }
  }

}

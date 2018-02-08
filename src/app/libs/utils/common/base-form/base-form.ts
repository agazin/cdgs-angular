import { FormGroup } from '@angular/forms';
import { EventEmitter, Output, Input } from '@angular/core';
import { Mode } from '../../enum/program-mode.enum';

export abstract class BaseForm {

  @Input() formModel: FormGroup;

  constructor() { }

}

import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormControlBase } from './form-control-base';

@Component({
  selector: 'lib-form-control',
  templateUrl: './dynamic-form-control.component.html'
})
export class DynamicFormControlComponent {
  @Input() formControlBase: FormControlBase<string>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.formControlBase.key].valid; }
}

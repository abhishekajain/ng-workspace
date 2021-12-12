import { FormControlBase } from './form-control-base';

export class TextboxFormControl extends FormControlBase<string> {
  controlType = 'textbox';
}

export class SelectFormControl extends FormControlBase<string> {
  controlType = 'select';
}

export class PasswordFormControl extends FormControlBase<string> {
  controlType = 'password';
}

export class EmailFormControl extends FormControlBase<string> {
  controlType = 'email';
}

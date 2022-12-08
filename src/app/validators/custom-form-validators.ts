import { AbstractControl } from '@angular/forms';

export class CustomFormValidator {
  static validateName(control: AbstractControl) {
    const name = control.value as string;
    if (name.includes('*')) {
      return { invalidName: true };
    }
    return null;
  }
}

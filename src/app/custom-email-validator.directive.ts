import { Directive } from '@angular/core';
import {
  AbstractControl,
  ValidationErrors,
  Validator,
  NG_VALIDATORS,
} from '@angular/forms';

@Directive({
  selector: '[appCustomEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomEmailValidatorDirective,
      multi: true,
    },
  ],
})
export class CustomEmailValidatorDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const value = control.value as string;
    if (value.includes('test')) {
      return {
        invalidEmail: true,
      };
    }
    return null;
  }
}

import { AbstractControl } from '@angular/forms';

export class CustomFormValidator {
  static validateName(control: AbstractControl) {
    const name = control.value as string;
    if (name.includes('*')) {
      return { invalidName: true };
    }
    return null;
  }

  static validateSpecialChars(char: string) {
    return (control: AbstractControl) => {
      const spchar = control.value as string;
      if (spchar.includes(char)) {
        return { invalidspecialChar: true };
      }
      return null;
    };
  }
}

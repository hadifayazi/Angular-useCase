import { AbstractControl, FormGroup } from '@angular/forms';

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

  static validaDate(control: FormGroup) {
    const checkinTime: any = new Date(control.get('checkinTime')?.value);
    const checkoutTime: any = new Date(control.get('checkoutTime')?.value);
    const difftime = checkoutTime - checkinTime;
    const diffDays = Math.ceil(difftime / (1000 * 60 * 60 * 24));
    if (diffDays <= 0) {
      return { invalidDate: true };
    }
    return null;
  }
}

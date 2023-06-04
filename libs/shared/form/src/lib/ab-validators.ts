import { AbstractControl, FormGroup } from '@angular/forms';
type functionValidator = (control: AbstractControl) => any | null;
type functionFormValidator = (formGroup: FormGroup) => any | null;

export class AbValidators {
  static realisticDate(control: AbstractControl): any | null {
    const value = new Date(control.value);
    const today = new Date();
    const min = new Date(today.setFullYear(today.getFullYear() - 5));
    const max = new Date(today.setFullYear(today.getFullYear() + 5));
    if (value < min || value > max) {
      return {
        'realistic-date': 'Five year before or after today',
      };
    }
    return null;
  }

  static includes(expected: string): functionValidator {
    return function (control: AbstractControl): any | null {
      const value = control.value as string;
      if (
        value &&
        value.toLocaleLowerCase().includes(expected.trim().toLocaleLowerCase())
      ) {
        return null;
      } else {
        return { includes: expected + ' not found' };
      }
    };
  }

  static confirmed(
    controlName: string,
    matchingControlName: string
  ): functionFormValidator {
    return function (formGroup: FormGroup): any | null {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      console.log(control.value)
      console.log(matchingControl.value)
      if (control.value !== matchingControl.value) {
        return { confirmedValidator: true };
      } else {
        return null;
      }
    };
  }
}
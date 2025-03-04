import type { AbstractControl, Validator, ValidatorFn } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (
  control: AbstractControl
): Validator => {
  const password = control.get('password').value;
  const confirmPassword = control.get('confirmPassword').value;

  if (!password || !confirmPassword) {
    return null;
  }

  password !== confirmPassword
    ? control.get('confirmPassword').setErrors({ passwordMismatch: true })
    : control.get('confirmPassword').setErrors(null);
  return null;
};

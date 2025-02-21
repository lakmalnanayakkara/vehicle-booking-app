import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../shared/validators/password-mismatch.validator';
@Component({
  selector: 'app-sign-up-screen',
  standalone: false,
  templateUrl: './sign-up-screen.component.html',
  styleUrl: './sign-up-screen.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SignUpScreenComponent {
  roles: { value: string; viewValue: string }[] = [
    { value: 'Driver', viewValue: 'DRIVER' },
    { value: 'Passenger', viewValue: 'PASSENGER' },
  ];

  signUpForm = new FormGroup(
    {
      username: new FormControl(undefined, [
        Validators.required,
        Validators.pattern(''),
        //Validators.pattern(GlobalConstant.nameRegex),
      ]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
    },
    {
      validators: passwordMatchValidator,
    }
  );

  onSubmit() {}
}

import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-screen',
  standalone: false,
  templateUrl: './sign-up-screen.component.html',
  styleUrl: './sign-up-screen.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SignUpScreenComponent {
  signUpForm = new FormGroup({
    username: new FormControl(undefined, [
      Validators.required,
      Validators.pattern(''),
      //Validators.pattern(GlobalConstant.nameRegex),
    ]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {}
}

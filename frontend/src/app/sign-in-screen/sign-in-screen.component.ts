import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in-screen',
  standalone: false,
  templateUrl: './sign-in-screen.component.html',
  styleUrl: './sign-in-screen.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SignInScreenComponent {
  signInForm = new FormGroup({
    username: new FormControl(undefined, [
      Validators.required,
      Validators.pattern(''),
      //Validators.pattern(GlobalConstant.nameRegex),
    ]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {}
}

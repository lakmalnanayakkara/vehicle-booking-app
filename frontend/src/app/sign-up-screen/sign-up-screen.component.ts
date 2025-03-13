import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../shared/validators/password-mismatch.validator';
import { UserService } from '../services/user.service';
import { UserSignUp } from '../interface/user-interface';
import { UserRoles } from '../interface/enums/common.enum';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up-screen',
  standalone: false,
  templateUrl: './sign-up-screen.component.html',
  styleUrl: './sign-up-screen.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SignUpScreenComponent {
  isLoading: boolean = false;

  roles: { value: UserRoles; viewValue: string }[] = [
    { value: UserRoles.DRIVER, viewValue: 'DRIVER' },
    { value: UserRoles.PASSENGER, viewValue: 'PASSENGER' },
  ];

  signUpForm = new FormGroup(
    {
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      role: new FormControl(undefined, [Validators.required]),
    },
    {
      validators: passwordMatchValidator,
    }
  );

  constructor(
    private userService: UserService,
    private toast: ToastrService,
    private router: Router
  ) {}

  onSubmit() {
    this.isLoading = true;
    const data: UserSignUp = {
      username: this.signUpForm.controls.username.value,
      password: this.signUpForm.controls.password.value,
      role: this.signUpForm.controls.role.value,
    };
    const sub = this.userService.userSignUp(data).subscribe(
      (data) => {
        this.router.navigate(['/home']);
      },
      (error) => {
        this.isLoading = false;
        this.toast.error(error.error.message);
      }
    );
  }
}

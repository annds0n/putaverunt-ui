import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../core/authentication.service';
import { UserCredentials } from '../core/models';

@Component({
  selector: 'pvt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    fb: FormBuilder,
    private readonly authentication: AuthenticationService
    ) {
    this.loginForm = fb.group({
      userName: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(20)
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(100)
      ])]
    });
   }

   login() {
    const {userName, password} = this.loginForm.value;
    const user = new UserCredentials({userName, password});
    this.authentication.authenticate(user).subscribe({
      next: () => console.log(this.authentication.getUser())
    });
   }

}

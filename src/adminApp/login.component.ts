import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'login-page',
  templateUrl: 'adminApp/html/login.html'
})
export class LoginComponent {
	constructor(public service: LoginService) { }

  onSubmit(formValue: { login: string, password: string }) {
    this.service.login(formValue);
  }
}

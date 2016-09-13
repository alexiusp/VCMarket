import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'my-app',
  templateUrl: 'adminApp/html/index.html'
})
export class AppComponent {
	constructor(public login: LoginService) { }
}

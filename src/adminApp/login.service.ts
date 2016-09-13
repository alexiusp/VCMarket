import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
	public isLoggedIn = false;
	constructor() {
		this.isLoggedIn = false;
	}
	login(credentials: any) {
		this.isLoggedIn = true;
	};
}

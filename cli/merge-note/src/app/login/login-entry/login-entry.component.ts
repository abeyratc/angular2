import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { LoginAuthcService } from '../login-authc/login-authc.service';

@Component({
	moduleId: module.id,
	selector: 'login-entry',
	templateUrl: 'login-entry.component.html',
	styleUrls: [
		'login-entry.component.css'
	]
})

export class LoginEntryComponent implements OnInit {

	@Input()
	username: string;

	@Input() 
	password: string;

	constructor(public router: Router, public authcService: LoginAuthcService){}

	ngOnInit(): void {
	}

	login(): void { 
		if(this.username && this.password) {
			this.authcService.login(this.username, this.password).subscribe(() => {
				if (this.authcService.isLoggedIn) {
				console.log("redirectUrl="+this.authcService.redirectUrl)
					let redirect = this.redirectTo(this.authcService.redirectUrl);
					this.router.navigate([redirect]);
				} else {
					console.log("not logged in")
				}
			});
		}
	}

	redirectTo(redirectUrl:string): string {
		if(!redirectUrl || redirectUrl === 'login') {
			return '/notes';
		} else {
			return redirectUrl;
		}
	}
}
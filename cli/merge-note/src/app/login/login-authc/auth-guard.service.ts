import { Injectable } 		from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { LoginAuthcService }		from './login-authc.service';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private authcService: LoginAuthcService, private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		console.log('AuthGuard#canActivate called');
		let url: string = state.url;
		return this.checkLogin(url);
	}

	checkLogin(url: string): boolean {
		if (this.authcService.isLoggedIn) { 
			return true; 
		} else {
			this.authcService.redirectUrl = url;
			this.router.navigate(['/login']);
			return false;
		}
	}
}
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Credentials } from './credentials';

@Injectable() 
export class LoginAuthcService {

	private authcUrl = '/mrgnote/authc/login'

	private authCredentials: Credentials;
	
	isLoggedIn: boolean;

	redirectUrl: string;

	apitoken: string;

	constructor(private http: Http) {}

	login(username:string, password:string): Observable<boolean> {
		console.log("[LoginAuthcService][login]")	
		let cred: Credentials = new Credentials(username, password, '', this.uuid());
		let body = JSON.stringify(cred);
		let headers = new Headers({'Accept': 'application/json','Content-Type': 'application/json'});
		let options = new RequestOptions({ headers: headers });
console.log("[LoginAuthcService][login][this.authcUrl]="+this.authcUrl)
		return this.http.post(this.authcUrl, body, options)
			.map((res: Response) => {
				let data = res.json();
				if (data.authToken) {
					this.apitoken = data.authToken;
					this.isLoggedIn = true;
					this.authCredentials = new Credentials(username, '', data.apiKey, '');
				}
				return Observable.of(this.isLoggedIn);
			}).catch(this.handleError);
	}

	logout(): void {
		this.isLoggedIn = false;
	}

	private handleError (error: Response | any) {
		// In a real world app, we might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}

	public getAuthenticatedCredentials(): Credentials {
		return this.authCredentials;
	}

	private uuid(): string {
		let d = new Date().getTime();
    	var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        	let r = (d + Math.random()*16)%16 | 0;
        	d = Math.floor(d/16);
        	return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
	}
}
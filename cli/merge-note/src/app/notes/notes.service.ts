import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Note } from '../shared/note';


@Injectable()
export class NotesService {

	private notesUrl = '/mrgnote/notes'
	
	constructor(private http: Http) {}

	saveNote(note: Note): Observable<boolean> {
		console.log("[NotesService][saveNote]")	
		let body = JSON.stringify(note);
		let headers = new Headers({'Accept': 'application/json','Content-Type': 'application/json'});
		let options = new RequestOptions({ headers: headers });
console.log("[NotesService][saveNote][url]="+this.notesUrl + " [body]=" +body)	
		return this.http.post(this.notesUrl, body, options)
			.map((res: Response) => {
				let data = res.json();
				console.log(data);
				return Observable.of(data);
			}).catch(this.handleError);
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
}
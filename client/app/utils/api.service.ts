import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class APIService {
	constructor (
		private http: Http
	) {}

	endpoint = ENV === 'prod' ? 'https://willand.co' : 'http://localhost:3000';

	GET (path: string) {
		return this.http.get(this.endpoint + path)
			.map(res => this.parseResponse(res)).toPromise()
			.catch(err => Promise.reject(this.parseResponse(err)));
	}

	private parseResponse (res) {
		try {
			return res.json();
		} catch (e) {
			return res;
		}
	}
}
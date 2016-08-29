import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class APIService {
	constructor (
		private http: Http
	) {
		this.endpoint = ENV === 'prod' ? 'https://willand.co' : 'http://localhost:3000';
	}

	public endpoint: string;

	public get (path: string): Observable<any> {
		return this.http.get(this.endpoint + path)
			.map((res) => res.json());
	}
}
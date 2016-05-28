/// <reference path="./../../../node_modules/angular2/typings/browser.d.ts" />
import * as _ from 'lodash';

let root: string = 'app/app/main/main.';

// Angular
import {Component, provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {Routes, Route, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from '@angular/router';
import {LocationStrategy, HashLocationStrategy, Location, CORE_DIRECTIVES} from '@angular/common';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';

// WillAnd
import {ResumeComponent} from './../resume/resume.component';

@Component({
	selector: 'willand',
	templateUrl: root + 'html',
	styleUrls: [root + 'css'],
	directives: [
		ROUTER_DIRECTIVES,
		CORE_DIRECTIVES
	],
	providers: [
		HTTP_PROVIDERS,
		provide(TranslateLoader, {
			useFactory: (http: Http) => new TranslateStaticLoader(http, 'lang', '.json'),
			deps: [Http]
		}),
		TranslateService,
		ROUTER_PROVIDERS
	],
	pipes: [TranslatePipe]
})
@Routes([
	new Route({
		path: '/',
		component: ResumeComponent
	})
])
export class WillAnd {
	public currentLang: any;
	public supportedLangs = [
		{
			iso: 'en',
			name: 'ENGLISH'
		}
	];

	constructor (
		private translate: TranslateService,
		private _router: Router,
		private _location: Location
	) {
		let userLang = navigator.language.split('-')[0];
		this.currentLang = (_.findIndex(this.supportedLangs, {iso: userLang}) > -1) ? _.find(this.supportedLangs, {iso: userLang}) : _.find(this.supportedLangs, {iso: 'en'});
		translate.setDefaultLang('en');
		translate.use(this.currentLang.iso);
	}

	public isAtLocation (urlLoc: string): boolean {
		return this._location.path().indexOf(urlLoc) > -1 && this._location.path().split('/').length === 2;
	}
}

bootstrap(WillAnd, [
	ROUTER_PROVIDERS,
	provide(LocationStrategy, {
		useClass: HashLocationStrategy
	})
]);


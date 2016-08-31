import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { Component, enableProdMode } from '@angular/core';

import {
	TranslateModule,
	TranslateLoader,
	TranslateStaticLoader,
	TranslateService,
	TranslatePipe
} from 'ng2-translate';

import { WillAnd } from './main.component';
import { routing, components } from './main.routing';
import { APIService } from './../utils/api.service';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		routing,
		TranslateModule.forRoot({
			provide: TranslateLoader,
			useFactory: (http: Http) => new TranslateStaticLoader(http, '/static', '.json'),
			deps: [Http]
		})
	],
	bootstrap: [WillAnd],
	declarations: [
		WillAnd,
		...components
	],
	providers: [
		// Angulartics2GoogleAnalytics,
		TranslateService,
		APIService
	]
})
export class WillAndModule { }

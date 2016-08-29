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
import { APIService } from './../utils/api.service';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		TranslateModule.forRoot({
			provide: TranslateLoader,
			useFactory: (http: Http) => new TranslateStaticLoader(http, '/static', '.json'),
			deps: [Http]
		})
	],
	bootstrap: [WillAnd],
	declarations: [
		WillAnd
	],
	providers: [
		// Angulartics2GoogleAnalytics,
		TranslateService,
		APIService
	]
})
export class WillAndModule { }

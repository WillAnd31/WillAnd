import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';

import {
	TranslateModule,
	TranslateLoader,
	TranslateStaticLoader
} from 'ng2-translate';

import { WillAndComponent } from './main/main.component';
import { APIService } from './utils/api.service';
import { createTranslateLoader } from './utils/lang-loader';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		TranslateModule.forRoot({
			provide: TranslateLoader,
			useFactory: (createTranslateLoader),
			deps: [Http]
		})
	],
	declarations: [ WillAndComponent ],
	providers: [ APIService ],
	bootstrap: [ WillAndComponent ]
})
export class WillAndModule {}
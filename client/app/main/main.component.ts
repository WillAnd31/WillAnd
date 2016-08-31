import * as _ from 'lodash';

import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

// Analytics
// import {Angulartics2GoogleAnalytics} from 'angulartics2/src/providers/angulartics2-google-analytics';
// import {Angulartics2, Angulartics2On} from 'angulartics2';

@Component({
	selector: 'willand',
	template: '<router-outlet></router-outlet>',
	directives: [
		// Angulartics2On
	]
})
export class WillAnd {
	constructor (
		// private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
		private translate: TranslateService
	) {
		// angulartics2GoogleAnalytics.pageTrack('/');
		translate.setDefaultLang('en');
		translate.use(navigator.language.split('-')[0]);
	}

}

import {bootstrap} from '@angular/platform-browser-dynamic';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {ROUTER_PROVIDERS} from '@angular/router';
import {provide, enableProdMode} from '@angular/core';
import {WillAnd} from './app/main/main';
import {Angulartics2} from 'angulartics2';

require('./styles/global.scss');

export function bootApp () {
	if (ENV === 'production') enableProdMode();

	bootstrap(WillAnd, [
		ROUTER_PROVIDERS,
		Angulartics2,
		provide(LocationStrategy, {
			useClass: HashLocationStrategy
		})
	]);
}

window.onload = bootApp;

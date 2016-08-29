import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { WillAndModule } from './app/main/main.module';

require('./styles/global.scss');

function bootstrapApp () {
	if (ENV === 'prod') enableProdMode();
	platformBrowserDynamic().bootstrapModule(WillAndModule);
}

window.onload = bootstrapApp;
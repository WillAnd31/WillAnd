
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { WillAndModule } from './app/app.module';

(req => req.keys().forEach(req))((require as any).context('./images/', true, /.*/));

export function bootApp () {
	if (ENV === 'prod') enableProdMode();

	console.time('Bootstrapped');

	platformBrowserDynamic().bootstrapModule(WillAndModule)
		.then(() => console.timeEnd('Bootstrapped'))
		.catch(err => console.error('Error bootstrapping application: ', err));
}

window.onload = bootApp;

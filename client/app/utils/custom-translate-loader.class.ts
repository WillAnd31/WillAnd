import {TranslateLoader} from 'ng2-translate/ng2-translate';
import {Observable} from 'rxjs';

export class CustomLoader implements TranslateLoader {
	getTranslation(lang: string): Observable<any> {
		return Observable.of(require('./../../lang/en.json'));
	}
}

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'translate'
})
export class CustomTranslatePipe implements PipeTransform {
	transform (translateKey: string): any {
		return translateKey;
	}
}
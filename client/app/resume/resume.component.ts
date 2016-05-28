import {Component} from '@angular/core';
import {TranslatePipe} from 'ng2-translate/ng2-translate';

let rootPath: string = 'app/app/resume/resume.component.';

@Component({
	selector: 'willand-resume',
	templateUrl: rootPath + 'html',
	styleUrls: [rootPath + 'css'],
	pipes: [TranslatePipe]
})
export class ResumeComponent {}

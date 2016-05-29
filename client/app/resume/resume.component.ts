import {Component} from '@angular/core';
import {TranslatePipe} from 'ng2-translate/ng2-translate';
// import {SkillDirective} from './../directives/skill.directive';
import {Skills} from './../lists/skills.list';
import {Skill} from './../models/skill.model';
import {Experiences} from './../lists/experiences.list';
import {Experience} from './../models/experience.model';
import {Educations} from './../lists/educations.list';
import {Education} from './../models/education.model';

let rootPath: string = 'app/app/resume/resume.component.';

@Component({
	selector: 'willand-resume',
	templateUrl: rootPath + 'html',
	styleUrls: [rootPath + 'css'],
	// directives: [SkillDirective],
	pipes: [TranslatePipe]
})
export class ResumeComponent {
	public skills: Skill[];
	public experiences: Experience[];
	public educations: Education[];

	constructor () {
		this.skills = Skills;
		this.experiences = Experiences;
		this.educations = Educations;
	}

	public open (url: string) {
		window.open(url, '_blank');
	}
}

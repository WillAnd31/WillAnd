import {Component} from '@angular/core';
import {TranslatePipe} from 'ng2-translate/ng2-translate';
import {Skills} from './../lists/skills.list';
import {Skill} from './../models/skill.model';
import {Experiences} from './../lists/experiences.list';
import {Experience} from './../models/experience.model';
import {Educations} from './../lists/educations.list';
import {Education} from './../models/education.model';
import {Interest} from './../models/interest.model';
import {Interests} from './../lists/interests.list';
import {Award} from './../models/award.model';
import {Awards} from './../lists/awards.list';

let rootPath: string = 'app/app/resume/resume.component.';

@Component({
	selector: 'willand-resume',
	template: require('./resume.component.html'),
	pipes: [TranslatePipe]
})
export class ResumeComponent {
	public skills: Skill[];
	public experiences: Experience[];
	public educations: Education[];
	public interests: Interest[];
	public awards: Award[];

	constructor () {
		this.skills = Skills;
		this.experiences = Experiences;
		this.educations = Educations;
		this.interests = Interests;
		this.awards = Awards;
	}

	public open (url: string) {
		window.open(url, '_blank');
	}
}

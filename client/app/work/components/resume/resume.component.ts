import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';

import { Skill, Experience, Education, Interest, Award } from './../../../models';
import { APIService } from './../../../utils/api.service';

@Component({
	selector: 'willand-resume',
	template: require('./resume.component.html')
})
export class ResumeComponent implements OnInit {
	constructor(
		private api: APIService
	) {}

	ngOnInit() {
		this.api.get('/static/awards.json')
			.subscribe((awards: any[]) => {
				this.awards = _.map(awards, (award) => new Award(award));
			});
		this.api.get('/static/education.json')
			.subscribe((eds: any[]) => {
				this.educations = _.map(eds, (ed) => new Education(ed));
			});
		this.api.get('/static/experiences.json')
			.subscribe((exps: any[]) => {
				this.experiences = _.map(exps, (exp) => new Experience(exp));
			});
		this.api.get('/static/interests.json')
			.subscribe((inters: any[]) => {
				this.interests = _.map(inters, (inter) => new Interest(inter));
			});
		this.api.get('/static/skills.json')
			.subscribe((skls: any[]) => {
				this.skills = _.map(skls, (skl) => new Skill(skl));
			});
	}

	public skills: Skill[];
	public experiences: Experience[];
	public educations: Education[];
	public interests: Interest[];
	public awards: Award[];

	public open (url: string) {
		window.open(url, '_blank');
	}
}
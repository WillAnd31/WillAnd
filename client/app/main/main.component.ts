import * as _ from 'lodash';

import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { APIService } from './../utils/api.service';

// Analytics
// import {Angulartics2GoogleAnalytics} from 'angulartics2/src/providers/angulartics2-google-analytics';
// import {Angulartics2, Angulartics2On} from 'angulartics2';

import { Skill, Experience, Education, Interest, Award } from './../models';

@Component({
	selector: 'willand',
	template: require('./main.component.html'),
	directives: [
		// Angulartics2On
	]
})
export class WillAnd {
	constructor (
		private translate: TranslateService,
		private api: APIService
		// private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics
	) {
		translate.setDefaultLang('en');
		translate.use(navigator.language.split('-')[0]);
		// angulartics2GoogleAnalytics.pageTrack('/');
		api.get('/static/awards.json')
			.subscribe((awards: any[]) => {
				this.awards = _.map(awards, (award) => new Award(award));
			});
		api.get('/static/education.json')
			.subscribe((eds: any[]) => {
				this.educations = _.map(eds, (ed) => new Education(ed));
			});
		api.get('/static/experiences.json')
			.subscribe((exps: any[]) => {
				this.experiences = _.map(exps, (exp) => new Experience(exp));
			});
		api.get('/static/interests.json')
			.subscribe((inters: any[]) => {
				this.interests = _.map(inters, (inter) => new Interest(inter));
			});
		api.get('/static/skills.json')
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

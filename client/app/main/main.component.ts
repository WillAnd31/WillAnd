import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

import { APIService } from './../utils/api.service';
import { Award, Education, Experience, Interest, Skill } from './../models';

@Component({
	selector: 'will-and',
	templateUrl: 'main.component.html',
	styleUrls: ['main.component.scss']
})
export class WillAndComponent implements OnInit {
	constructor (
		private translate: TranslateService,
		private API: APIService
	) {
		translate.setDefaultLang('en');
		translate.use(navigator.language.split('-')[0]);
	}

	skills: Skill[];
	experiences: Experience[];
	education: Education[];
	interests: Interest[];
	awards: Award[];

	ngOnInit() {
		this.getData('skills', Skill);
		this.getData('experiences', Experience);
		this.getData('education', Education);
		this.getData('interests', Interest);
		this.getData('awards', Award);
	}

	getData<Type> (field, DataType: { new(info: any): Type }) {
		this.API.GET(`/static/${field}.json`)
			.then((dataList: any[]) => this[field] = _.map(dataList, data => new DataType(data)));
	}

	open (url: string) {
		window.open(url, '_blank');
	}
}
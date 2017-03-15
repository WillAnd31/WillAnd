import * as _ from 'lodash';

export class Education {
	constructor (
		data: any
	) {
		this.length = data.school + '_LENGTH';
		this.moreInfo = _.times(data.numOfMoreInfo, (i) => data.school + '_MORE_' + (i + 1)) || [];
		this.school = data.school;
		this.numOfMoreInfo = data.numOfMoreInfo,
		this.link = data.link;
		this.logo = data.logo;
	}

	moreInfo: string[];
	length: string;
	school: string;
	numOfMoreInfo: number;
	link: string;
	logo: string;
}

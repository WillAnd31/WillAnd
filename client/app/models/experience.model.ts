import * as _ from 'lodash';

export class Experience {
	constructor (
		data: any
	) {
		this.responsibilities = _.times(data.numOfResponsibilities, (i) => {
			return data.company + '_RES_' + (i + 1);
		}) || [];
		this.company = data.company;
		this.title = data.title;
		this.numOfResponsibilities = data.numOfResponsibilities;
		this.length = data.length;
		this.logo = data.logo;
		this.link = data.link;
	}

	responsibilities: string[];
	company: string;
	title: string;
	numOfResponsibilities: number;
	length: string;
	logo: string;
	link: string;
}

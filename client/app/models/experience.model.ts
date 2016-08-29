import * as _ from 'lodash';

export class Experience {
	public responsibilities: string[];
		public company: string;
		public title: string;
		public numOfResponsibilities: number;
		public length: string;
		public logo: string;
		public link: string;

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
}

import * as _ from 'lodash';

export class Education {
	public moreInfo: string[];
	public length: string;
	public school: string;
	public numOfMoreInfo: number;
	public link: string;
	public logo: string;

	constructor (
		data: any
	) {
		this.length = data.school + '_LENGTH';
		this.moreInfo = _.times(data.numOfMoreInfo, (i) => {
			return data.school + '_MORE_' + (i + 1);
		}) || [];
		this.school = data.school;
		this.numOfMoreInfo = data.numOfMoreInfo,
		this.link = data.link;
		this.logo = data.logo;
	}
}

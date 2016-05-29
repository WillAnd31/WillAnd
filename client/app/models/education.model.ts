import * as _ from 'lodash';

export class Education {
	public moreInfo: string[];
	public length: string;

	constructor (
		public school: string,
		public numOfMoreInfo: number,
		public link: string,
		public logo: string
	) {
		this.length = school + '_LENGTH';
		this.moreInfo = _.times(numOfMoreInfo, (i) => {
			return school + '_MORE_' + (i + 1);
		}) || [];
	}
}

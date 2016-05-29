import * as _ from 'lodash';

export class Experience {
	public responsibilities: string[];

	constructor (
		public company: string,
		public title: string,
		public numOfResponsibilities: number,
		public length: string,
		public logo: string,
		public link: string
	) {
		this.responsibilities = _.times(numOfResponsibilities, (i) => {
			return company + '_RES_' + (i + 1);
		}) || [];
	}
}

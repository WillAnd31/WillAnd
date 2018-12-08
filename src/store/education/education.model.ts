export class WAEducation {

	constructor(
		public school: string,
		public image: string,
		public start: string,
		public end: string
	) {
		this.image = image ? '/img/education/' + image : image;
	}

}
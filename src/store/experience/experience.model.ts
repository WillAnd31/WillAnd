export class WAExperience {

	constructor(
		public company: string,
		public image: string,
		public link: string,
		public title: string,
		public start: string,
		public end: string,
		public details: string[]) {
			this.image = image ? '/img/experiences/' + image : image;
		}

}
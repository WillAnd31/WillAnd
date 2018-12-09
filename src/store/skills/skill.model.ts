export class WASkill {

	constructor(
		public image: string,
		public title = '',
		public link = '') {
		this.image = image ? '/img/skills/' + image : image;
	}

}

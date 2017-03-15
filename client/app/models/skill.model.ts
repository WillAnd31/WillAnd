export class Skill {
	constructor (
		data: any
	) {
		this.name = data.name;
		this.link = data.link;
		this.imgUrl = data.imgUrl;
		this.hideOnSmall = !!data.hideOnSmall;
	}

	name: string;
	link: string;
	imgUrl: string;
	hideOnSmall: boolean;
}

export class Skill {
	public name: string;
	public link: string;
	public imgUrl: string;
	public hideOnSmall: boolean;
	constructor (
		data: any
	) {
		this.name = data.name;
		this.link = data.link;
		this.imgUrl = data.imgUrl;
		this.hideOnSmall = !!data.hideOnSmall;
	}
}

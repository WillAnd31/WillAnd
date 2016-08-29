export class Interest {
	public name: string;
	public imgUrl: string;

	constructor (
		data: any
	) {
		this.name = data.name;
		this.imgUrl = data.imgUrl;
	}
}

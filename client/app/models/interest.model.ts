export class Interest {
	constructor (
		data: any
	) {
		this.name = data.name;
		this.imgUrl = data.imgUrl;
	}

	name: string;
	imgUrl: string;
}

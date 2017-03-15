export class Award {
	constructor (
		data: any
	) {
		this.name = data.key;
		this.desc = data.key + '_DESC';
		this.link = data.link;
	}

	name: string;
	desc: string;
	link: string;
}

export class Award {
	public name: string;
	public desc: string;
	public link: string;

	constructor (
		data: any
	) {
		this.name = data.key;
		this.desc = data.key + '_DESC';
		this.link = data.link;
	}
}

export class Award {
	public desc: string;

	constructor (
		public name: string,
		public link: string,
		public image?: string
	) {
		this.desc = name + '_DESC';
	}
}

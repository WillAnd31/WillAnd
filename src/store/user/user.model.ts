export interface WAUserLink {
	title: string;
	href: string;
	target: string;
}

export class WAUser {

	public name = 'Will Anderson'
	public links: WAUserLink[] = [
		{ title: 'will@willand.co', href: 'mailto:will@willand.co', target: '_blank' },
		// { title: 'Blog', href: '/blog', target: '' },
		{ title: 'Github', href: 'https://github.com/willand31', target: '_blank' },
		{ title: 'LinkedIn', href: 'https://www.linkedin.com/in/will-anderson-95515586', target: '_blank' }
	]

}

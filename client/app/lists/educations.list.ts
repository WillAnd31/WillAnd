import {Education} from './../models/education.model';

export let Educations: Education[] = [
	new Education(
		'UU',
		0,
		'http://www.utah.edu/',
		require('./../../images/uofu.png')
	),
	new Education(
		'USU',
		3,
		'https://www.usu.edu/',
		require('./../../images/usu.png')
	),
	new Education(
		'DM',
		2,
		'https://devmounta.in/',
		require('./../../images/devmountain.png')
	),
	new Education(
		'BHS',
		5,
		'http://www.binghamminers.org/',
		require('./../../images/bingham.gif')
	)
];

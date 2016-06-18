import {Experience} from './../models/experience.model';

export let Experiences: Experience[] = [
	new Experience(
		'NOVI',
		'SOFTWARE_ENGINEER',
		5,
		'NOVI_TIME',
		require('./../../images/novi.svg'),
		'http://novisecurity.com/'
	),
	new Experience(
		'AFO',
		'DATA_TECHNICIAN',
		3,
		'AFO_TIME',
		require('./../../images/afo.png'),
		'http://www.advancefiber.com/'
	)
];

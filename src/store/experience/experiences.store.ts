import { StoreOptions } from 'vuex'

import { WAExperience } from './experience.model';

export interface ExperiencesStoreState {
	experiences: WAExperience[];
}

const experiences: WAExperience[] = [
	new WAExperience(
		'Vivint.SmartHome',
		'vivint.png',
		'https://www.vivint.com/',
		'Software Engineer',
		'October 2017',
		'Present',
		[
			'Develop and maintain features and products for the company\'s iOS app, Android app, web apps, and backend services',
			'Collaborate with product and design teams to deliver quality products',
			'Actively contribute to high level software and communication model architecture',
			'Work with 3rd parties to integrate into the Vivint ecosystem'
		]
	),
	new WAExperience(
		'Novi Security',
		'novi.svg',
		'https://www.novisecurity.com/',
		'Software Engineer',
		'June 2015',
		'October 2017',
		[
			'Develop and maintain multiple websites (Angular2, AngularJS, PHP, Wordpress)',
			'Develop and maintain a Ionic hybrid mobile application',
			'Develop and maintain backend services written in NodeJS',
			'Optimize website SEO',
			'Help with creating a solid database architecture'
		]
	),
	new WAExperience(
		'Advance Fiber Optics',
		'afo.png',
		'https://www.advancefiber.com/',
		'Data Technician',
		'April 2014',
		'June 2015',
		[
			'Manually input data into a fiber optic network management application',
			'Write SQLServer scripts to manipulate data in large databases',
			'Convert written, typed, or drawn fiber mappings to entries in a database'
		]
	)
];

export const ExperiencesStore: StoreOptions<ExperiencesStoreState> = {
	state: { experiences }
};

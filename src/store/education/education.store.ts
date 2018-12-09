import { StoreOptions } from 'vuex'

import { WAEducation } from './education.model';

export interface EducationsStoreState {
	education: WAEducation[];
}

const education: WAEducation[] = [
	new WAEducation(
		'University of Utah',
		'uofu.png',
		'Fall 2016',
		'Spring 2017'),
	new WAEducation(
		'Utah State University',
		'usu.png',
		'Fall 2015',
		'Spring 2016'),
	new WAEducation(
		'DevMountain',
		'devmountain.png',
		'Spring 2015',
		'Fall 2015'),
	new WAEducation(
		'Bingham High School',
		'bingham.gif',
		'Fall 2012',
		'Spring 2015')
];

export const EducationStore: StoreOptions<EducationsStoreState> = {
	state: { education }
};

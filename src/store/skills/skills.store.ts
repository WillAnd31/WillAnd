import { StoreOptions } from 'vuex'

import { WASkill } from './skill.model';

export interface SkillsStoreState {
	skills: WASkill[];
}

const skills: WASkill[] = [
	new WASkill('swift.png', 'Swift', 'https://swift.org/'),
	new WASkill('objc.png', 'ObjC'),
	new WASkill('python.png', 'Python', 'https://www.python.org/'),
	new WASkill('golang.png', 'Go', 'https://golang.org/'),
	new WASkill('kotlin.png', 'Kotlin', 'https://kotlinlang.org/'),
	new WASkill('java.svg', 'Java', 'https://java.com/'),
	new WASkill('csharp.png', 'C#'),
	new WASkill('cpp.png', 'CPP'),
	new WASkill('php.png', 'PHP', 'http://php.net/'),
	new WASkill('ts.png', 'TypeScript', 'https://www.typescriptlang.org/'),
	new WASkill('nodejs.png', 'NodeJS', 'https://nodejs.org/'),
	new WASkill('mongo.png', 'MongoDB', 'https://www.mongodb.com/'),
	new WASkill('mysql.png', 'MySQL', 'https://www.mysql.com/'),
	new WASkill('docker.png', 'Docker', 'https://www.docker.com/'),
	new WASkill('angular.svg', 'Angular', 'https://angular.io/'),
	new WASkill('vue.png', 'Vue', 'https://vuejs.org/'),
	new WASkill('reactjs.png', 'React', 'https://reactjs.org/'),
	new WASkill('wordpress.png', 'Wordpress', 'https://wordpress.com/'),
	new WASkill('mapping.svg', 'Mapping APIs')
];

export const SkillsStore: StoreOptions<SkillsStoreState> = {
	state: { skills }
};

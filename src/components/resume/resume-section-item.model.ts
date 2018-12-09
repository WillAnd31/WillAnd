import { WASkill } from '../../store/skills/skill.model';
import { WAExperience } from '../../store/experience/experience.model';
import { WAEducation } from '../../store/education/education.model';

export class WAResumeSectionItem {

	constructor(public identifier: string) {}

	static getItemFromSkill(skill: WASkill, identifier: number): WAResumeSectionSkillItem {
		return new WAResumeSectionSkillItem('skill-' + identifier, skill.image, skill.title, skill.link);
	}

	static getItemFromExperience(experience: WAExperience, identifier: number) {
		return new WAResumeSectionExperienceItem(
			'experience-' + identifier,
			experience.image,
			experience.company,
			experience.title,
			experience.start + ' - ' + experience.end,
			experience.details,
			experience.link);
	}

	static getItemFromEducation(education: WAEducation, identifier: number) {
		return new WAResumeSectionEducationItem(
			'education-' + identifier,
			education.image,
			education.school,
			education.start + ' - ' + education.end);
	}

}

export class WAResumeSectionSkillItem extends WAResumeSectionItem {

	constructor(
		identifier: string,
		public image: string,
		public title = '',
		public link = ''
	) { super(identifier) }

}

export class WAResumeSectionExperienceItem extends WAResumeSectionItem {

	constructor(
		identifier: string,
		public image: string,
		public company: string,
		public title: string,
		public time: string,
		public details: string[],
		public link: string
	) { super(identifier) }

}

export class WAResumeSectionEducationItem extends WAResumeSectionItem {

	constructor(
		identifier: string,
		public image: string,
		public title: string,
		public time: string
	) { super(identifier) }

}

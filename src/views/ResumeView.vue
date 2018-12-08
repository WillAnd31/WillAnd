<template>
	<div class="wa-resume-view">
		<h1 class="resume-title md-display-3">{{ user.name }}</h1>

		<div class="user-links">
			<a class="user-link"
				v-for="link in user.links"
				:target="link.target"
				:key="link.href"
				:href="link.href">
				{{ link.title }}
			</a>
		</div>

		<WAResumeSectionComponent
			v-for="section in sections"
			:key="section.title"
			:section="section"/>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import WAResumeSectionComponent from '../components/resume/ResumeSectionComponent.vue';
import { WAResumeSectionModel } from '../components/resume/resume-section.model';
import { WAResumeSectionItem } from '../components/resume/resume-section-item.model';

import { WAUser } from '../store/user/user.model';
import { UserStoreState } from '../store/user/user.store';
import { SkillsStoreState } from '../store/skills/skills.store';
import { ExperiencesStoreState } from '../store/experience/experiences.store';
import { EducationsStoreState } from '../store/education/education.store';

@Component({
	components: {
		WAResumeSectionComponent
	},
})
export default class ResumeView extends Vue {

	private get user(): WAUser {
		return (this.$store.state as UserStoreState).user;
	}

	private get sections(): WAResumeSectionModel[] {
		const skills = (this.$store.state as SkillsStoreState)
			.skills.map(WAResumeSectionItem.getItemFromSkill);
		const experiences = (this.$store.state as ExperiencesStoreState)
			.experiences.map(WAResumeSectionItem.getItemFromExperience);
		const education = (this.$store.state as EducationsStoreState)
			.education.map(WAResumeSectionItem.getItemFromEducation);

		return [
			new WAResumeSectionModel('Skills', skills),
			new WAResumeSectionModel('Experiences', experiences),
			new WAResumeSectionModel('Education', education)
		];
	}

}
</script>

<style lang="scss" scoped>
@import '../utils/styles.scss';

.wa-resume-view {
	padding: 3em 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.resume-title {
		margin: 0.2em;
	}

	.user-links {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		max-width: 35em;
		width: 50%;
		margin: 1em 0.5em;

		.user-link {
			color: $green;
			font-size: 1.2em;
			margin: 0.2em 1em;

			&:hover {
				color: $lightGreen;
			}
		}
	}

}
</style>

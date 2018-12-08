<template>
	<div class="wa-resume-section-component">
		<h2 class="title">{{ section.title }}</h2>
		<div class="items">
			<template v-for="item in section.items">
				<WASkillItem v-if="isSkill(item)" :item="item" :key="item.identifier"/>
				<WAExperienceItem v-if="isExperience(item)" :item="item" :key="item.identifier"/>
				<WAEducationItem v-if="isEducation(item)" :item="item" :key="item.identifier"/>
			</template>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { WAResumeSectionModel } from './resume-section.model';
import {
	WAResumeSectionItem,
	WAResumeSectionSkillItem,
	WAResumeSectionExperienceItem,
	WAResumeSectionEducationItem
} from './resume-section-item.model';

import WASkillItem from './ResumeSkillItemComponent.vue';
import WAExperienceItem from './ResumeExperienceItemComponent.vue';
import WAEducationItem from './ResumeEducationItemComponent.vue';

@Component({
	components: {
		WASkillItem,
		WAExperienceItem,
		WAEducationItem
	}
})
export default class WAResumeSectionComponent extends Vue {

	@Prop()
	private section!: WAResumeSectionModel

	private isSkill(item: WAResumeSectionItem): boolean {
		return item instanceof WAResumeSectionSkillItem;
	}

	private isExperience(item: WAResumeSectionItem): boolean {
		return item instanceof WAResumeSectionExperienceItem;
	}

	private isEducation(item: WAResumeSectionItem): boolean {
		return item instanceof WAResumeSectionEducationItem;
	}

}
</script>

<style scoped lang="scss">
@import '../../utils/styles.scss';

.wa-resume-section-component {
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0 5em 0 1em;
	margin: 2em 0;

	@media screen and (max-width: $smallScreen) {
		flex-direction: column;
		padding: 0 1.5em;
	}

	.title {
		text-align: right;
		width: 7em;

		@media screen and (max-width: $smallScreen) {
			text-align: center;
		}
	}

	.items {
		width: 85%;
		border-left: 3px solid $borderColor;
		padding: 1.5em 2em;
		margin-left: 1em;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;

		@media screen and (max-width: $smallScreen) {
			border-left: none;
			border-top: 3px solid $borderColor;
			padding: 1em 0em 0em;
			margin: 0em;
		}
	}
}
</style>

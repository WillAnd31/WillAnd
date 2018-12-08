<template>
	<div class="wa-skill-item" v-on:click="handleItemClicked()">
		<img class="image" :src="item.image">
		<p class="title" v-if="item.title">{{ item.title }}</p>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { WAResumeSectionSkillItem } from './resume-section-item.model';

@Component
export default class WAResumeSkillItemComponent extends Vue {

	@Prop()
	private item!: WAResumeSectionSkillItem

	private handleItemClicked() {
		if (this.item.link) window.open(this.item.link, '_blank');
	}

}
</script>

<style scoped lang="scss">
.wa-skill-item {
	width: 5em;
	height: 5em;
	margin: 1.5em;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;

	&:hover {
		cursor: pointer;

		.title {
			top: 5.5em;
			opacity: 1;
		}
	}

	.image {
		z-index: 2;
	}

	.title {
		margin: 0;
		width: 100%;
		position: absolute;
		top: 2.5em;
		opacity: 0;
		transition: top 200ms, opacity 200ms;
		z-index: 1;
	}
}
</style>

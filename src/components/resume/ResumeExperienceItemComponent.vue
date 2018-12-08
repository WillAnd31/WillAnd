<template>
	<div :class="{ 'wa-experience-item': true, 'isInModal': showingModal }"
		v-on:click="handleItemClicked()">

		<img :src="item.image">
		<h2 class="title">{{ item.title }}</h2>
		<p class="time">{{ item.time }}</p>

		<WADetailsModal :item="item" v-show="showingModal" v-on:closeModal="handleModalClose()"/>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import WADetailsModal from './ResumeExperienceDetailsComponent.vue';
import { WAResumeSectionExperienceItem } from './resume-section-item.model';

@Component({
	components: {
		WADetailsModal
	}
})
export default class WAResumeExperienceItemComponent extends Vue {

	@Prop()
	private item!: WAResumeSectionExperienceItem;

	private showingModal = false;

	private handleModalClose() {
		setTimeout(() => this.showingModal = false);
	}

	private handleItemClicked() {
		this.showingModal = true;
	}

}
</script>

<style lang="scss" scoped>
.wa-experience-item {
	width: 20em;
	margin: 1.5em;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	&.isInModal {
		&:hover {
			cursor: initial;
		}
	}

	&:hover {
		cursor: pointer;
	}

	.title {
		font-weight: bold;
		margin: 0.5em 0;
	}

	.time {
		margin: 0;
	}
}
</style>

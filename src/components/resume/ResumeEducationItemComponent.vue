<template>
	<div class="wa-education-item">
		<img class="image" :src="item.image">
		<p class="time">{{ item.time }}</p>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { WAResumeSectionEducationItem } from './resume-section-item.model';

@Component
export default class WAEducationItemComponent extends Vue {

	@Prop()
	private item!: WAResumeSectionEducationItem

}

</script>

<style lang="scss" scoped>
.wa-education-item {
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	margin: 1.5em;

	.image {
		width: 20em;
	}
}
</style>

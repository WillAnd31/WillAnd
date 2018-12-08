<template>
	<transition name="modal-fade">
		<div id="modal-overlay" class="wa-experience-details" v-on:click="handleClicked($event)">
			<div class="modal-container">
				<md-card class="modal-card">
					<md-card-header>
						<p class="md-title">{{ item.company }}</p>
					</md-card-header>

					<md-card-content>
						<ul class="detail-container">
							<li class="detail" v-for="detail in item.details" :key="detail">{{ detail }}</li>
						</ul>
					</md-card-content>

					<md-card-actions class="buttons">
						<md-button class="md-primary" v-on:click="handleGoToSite()">Go To Website</md-button>
					</md-card-actions>
				</md-card>
			</div>
		</div>
	</transition>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import { WAResumeSectionExperienceItem } from './resume-section-item.model';

@Component
export default class ResumeExperienceDetailsComponent extends Vue {

	@Prop()
	private item!: WAResumeSectionExperienceItem;

	@Emit('closeModal')
	closeModal() {}

	private handleClicked(e: any) {
		if (!e.target || !e.target.id || e.target.id !== 'modal-overlay') return;
		this.closeModal();
	}

	private handleGoToSite() {
		if (this.item.link) window.open(this.item.link, '_blank');
	}

}
</script>

<style lang="scss" scoped>
.modal-fade-enter,
.modal-fade-leave-active {
	opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
	transition: opacity .5s ease
}

.wa-experience-details {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.3);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;

	.modal-container {
		min-width: 35%;
		min-height: 10em;
		max-width: 95%;
		max-height: 95%;
		z-index: 1001;

		.modal-card {
			.detail-container {
				.detail {
					text-align: left;
				}
			}

			.buttons {
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
}
</style>

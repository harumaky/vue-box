<template>
	<v-hover v-slot:default="{ hover }">
		<v-card :elevation="hover ? 12 : 6" class="box-card transition-swing">
			<div class="box-card__head primary d-flex justify-space-between align-center">
				<v-card-title class="primary">{{ title }}</v-card-title>
				<v-btn
					:disabled="!url"
					class="mr-4"
				>
					<a v-bind:href="url ? url : '/'" class="text-decoration-none">
						<v-icon>mdi-open-in-new</v-icon>
					</a>
				</v-btn>
			</div>
			<v-card-text class="my-4">
				<slot></slot>
			</v-card-text>
		</v-card>
	</v-hover>
</template>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props: {
		title: {
			type: String,
			required: true
		},

		url: {
			type: String,
			required: false
		}
	}
})
</script>
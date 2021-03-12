<template>
	<v-container>
		<h2 class="text-h2 mb-5">Styles - Vuetify</h2>
		<v-row>
			<v-col class="mb-4">
				<box-card title="タイトル">
					ああああ
				</box-card>
		
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BoxCard from "./boxcard.vue"


export default Vue.extend({
	name: "Styles",
	components: {
		BoxCard
	}
	
})
</script>
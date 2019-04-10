<template>
	<b-container>
		<div centered>
		  <b-card
		    v-bind:title="id[0].strCategory"
		    v-bind:img-src="id[0].strCategoryThumb"
		    img-alt="Image"
		    img-top
		    tag="article"
		    style="max-width: 20rem;"
		    class="mb-2"
		  >
		    <b-card-text>
		      {{ `${id[0].strCategoryDescription}` }}
		    </b-card-text>
		  </b-card>	
		</div>
	</b-container>
</template>

<script>

	export default {
		data() {
			return {
				id: ''
			}
		},
		mounted() {
			const { meals } = this.$store.state
			const aMeal = meals.filter(data => {
				return data.idCategory === this.$route.params.id
			})
			this.id = aMeal
		}
	}	

</script>

<style scoped>
	.mb-2 {
		margin-left: 30% !important;
	}
</style>

<template>
	<div>
		<h1>hey</h1>
		<b-container>
			<div centered>
				<div v-if="meals.length > 0">
					<div id="center">
						<div v-for="meal in meals">
							  <b-card
							    v-bind:title="meal.strMeal"
							    v-bind:img-src="meal.strMealThumb"
							    img-alt="Image"
							    img-top
							    tag="article"
							    style="max-width: 20rem;"
							    class="mb-2"
							  >
							    <b-card-text>
							      {{ `${meal.strInstructions}` }}
							    </b-card-text>
							  </b-card>					
						</div>						
					</div>
				</div>
				<div v-else>
					<h5>meals loading... </h5>
				</div>				
			</div>
		</b-container>
	</div>
</template>

<script>

	export default {
		computed: {
			meals() {
				return this.$store.state.meal
			}
		}
	}
</script>

<style scoped>
	#center {
		margin: auto;
		width: 50%;
	}

	#center[data-v-2975b4a2] {
    margin: auto;
    width: 35%;
	}	
</style>

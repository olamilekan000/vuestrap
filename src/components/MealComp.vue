<template>
  <div>
    <h1></h1>
		  <b-container>
    <div v-if="meals.length">
      <b-row>
        <div v-bind:key="meal.index" v-for="meal in meals">
          <b-col l="4">
            <b-card
              v-bind:title="meal.strCategory"
              v-bind:img-src="meal.strMealThumb"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2">
              <b-card-text>{{ `${meal.strInstructions.slice(0,100)}...` }}</b-card-text>
              <b-button href="#" variant="primary">View food</b-button>
            </b-card>
          </b-col>
        </div>
      </b-row>
    </div>
    <div v-else>
      <h5>meals loading...</h5>
    </div>
  </b-container>
  </div>
</template>

<script>
import { log } from 'util';
export default {
  computed: {
    meals() {
      return this.$store.state.meal;
    }
	}
};
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

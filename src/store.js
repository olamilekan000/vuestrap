import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  	meal: []
  },
  mutations: {
  	getMeal(state, meal) {
  		state.meal = [...meal]
  		console.log('mutations', state.meal)
  	}
  },
  actions: {
  	getAMeal({commit}, meal) {
  		axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
  			.then((res) => {
  				commit('getMeal', res.data.meals)
  				console.log(res.data.meals)
  				// console.log('actions', this.$store.state.meal)
  			})
  			.catch(err => {
  				console.log(err)
  			})	
  	}
  },
});

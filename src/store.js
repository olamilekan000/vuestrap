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
  	}
  },
  actions: {
  	getAMeal({commit}, meal) {
  		axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
  			.then((res) => {
  				commit('getMeal', res.data.meals)
  			})
  			.catch(err => {
  				console.log(err)
  			})	
  	}
  },
});

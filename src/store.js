/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable object-curly-spacing */
/* eslint-disable space-before-blocks */
/* eslint-disable arrow-parens */
/* eslint-disable semi */
/* eslint-disable key-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-tabs */
/* eslint-disable indent */
/* eslint-disable no-console */
/* eslint-disable no-mixed-spaces-and-tabs */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
	  meal: [],
		meals: JSON.parse(localStorage.getItem('meals'))
  },
  mutations: {
  getMeal(state, meal) {
  		state.meal = [...meal]
	  },
	// eslint-disable-next-line space-before-blocks
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
	  },
	getAllMeals({commit}){
		axios
		.get("https://www.themealdb.com/api/json/v1/1/categories.php")
		.then(response => {
			localStorage.setItem("meals", JSON.stringify(response.data.categories));
		})
		.catch(err => {
		  console.log(err);
		});
	  }
  },
});

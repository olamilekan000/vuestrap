import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Meal from './views/Meal.vue';
import singleMeal from './views/singleMeal.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/meal',
      name: 'meal',
      component: Meal,
    },
    {
      path: '/meal/:id',
      name: 'singleMeal',
      component: singleMeal,
      props: true,
    },        
  ],
});

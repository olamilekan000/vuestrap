<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <!-- <HelloWorld/>  -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
  import Navbar from './components/Navbar.vue';  
  export default {
    name: 'navbar',
    components: {
      Navbar,
      // HelloWorld
    },
    mounted(){
      this.$store.dispatch('getAllMeals')
    }
  }
</script>
<style>
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

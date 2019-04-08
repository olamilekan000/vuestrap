<template>
  <div>
    <h1>{{ hello }}</h1>
    <Cards />
  </div>
</template>

<script>
import Cards from './Cards.vue'

export default {
  name:'cards',
  components: {
    Cards
  },
  data() {
    return {
      hello: 'Hello, all is well!',
    };
  },
};
</script>


<style scoped>

</style>

<template>
  <v-app>
    <Toolbar />
    <v-container fluid>
      <v-scale-transition>
        <router-view></router-view>
      </v-scale-transition>
    </v-container>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar.vue';
export default {
  components: { Toolbar },
 mounted(){
	 this.$store.dispatch('stocks/loadFromDb')
 } 
  };
</script>

<style>
</style>


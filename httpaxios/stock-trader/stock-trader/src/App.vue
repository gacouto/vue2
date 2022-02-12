<template>
  <div>
    <Toolbar />
    <v-container fluid>
      <v-scale-transition>
        <router-view></router-view>
      </v-scale-transition>
    </v-container>
  </div>
</template>
<script>
import Toolbar from "./components/Toolbar.vue";
import StockList from "./components/StockList.vue";
export default {
  components: { StockList, Toolbar },
};
</script>
 

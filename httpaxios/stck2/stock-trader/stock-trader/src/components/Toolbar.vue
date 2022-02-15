<template>
  <v-toolbar color="secundary">
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-toolbar-title class="grey--text">Stocktrader</v-toolbar-title>
    <div class="ma-3"></div>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/">Inicio</v-btn>
      <v-btn flat to="/portfolio">Portfolio</v-btn>
      <v-btn flat to="/stocks">Açoes</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat @click="callItADay">finalizar dia</v-btn> 
      <DropDownSalvar/>
      <v-btn flat>{{ getTodaysBalanceFormatted }}</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import DropDownSalvar from './DropDownSalvar.vue';
export default {
  components: { DropDownSalvar },
  computed: {
    ...mapGetters(["getTodaysBalanceFormatted"]),
  },
  methods: {
    ...mapActions("stocks", ["callItADay"]),
  },
};
</script>

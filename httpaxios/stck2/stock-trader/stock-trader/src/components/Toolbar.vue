<template>
  <v-toolbar color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-toolbar-title class="white--text">Stocktrader</v-toolbar-title>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/">Inicio</v-btn>
      <v-btn flat to="/portfolio">Port</v-btn>
      <v-btn flat to="/stocks">Açoes</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>finaliz</v-btn>
      <v-btn flat>salvar e carrega</v-btn>
      <v-btn flat>{{ getTodaysBalanceFormatted }}</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['getTodaysBalanceFormatted'])
  },
};
</script>

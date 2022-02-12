<template>
    <v-toolbar color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-toolbar-title class="white--text">Title</v-toolbar-title>
    <v-toolbar-items class="hidden-sm-and-down">
        
      <router-link tag="v-btn" flat to="/portfolio">Inicio</router-link>
      <v-btn flat to="/">Inicio</v-btn>
      <v-btn flat to="/portfolio">Port</v-btn>
      <v-btn flat to="/stocks">Açoes</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>finaliz</v-btn>
      <v-btn flat>salvar e carrega</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

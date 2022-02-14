<template>
  <v-layout row wrap align-start justify-center >
    <v-card v-for="n in 15" :key="n" class="pa-3 m-2">
      <v-toolbar card color="blue">
        <v-toolbar-title>Apple</v-toolbar-title>
      </v-toolbar>

      <v-card-text>
        <v-card-actions>
          <v-text-field box label="Title" value="My new post"></v-text-field>
          <v-btn color="blue" disabled> Vender </v-btn>
        </v-card-actions>

        <v-divider class="my-2"></v-divider>
      </v-card-text>
    </v-card>
  </v-layout>
</template>
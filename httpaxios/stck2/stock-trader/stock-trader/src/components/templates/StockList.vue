<template>
  <v-layout row wrap align-start justify-center>
    <v-card v-for="stock in stocks" :key="stock.id" class="pa-2 ma-2 w-calc">
      <v-toolbar card color="blue">
        <v-toolbar-title>{{stock.name}}</v-toolbar-title>
      </v-toolbar>

      <v-card-text>
        <v-card-actions>
          <v-text-field  label="Qtd"  value="0"
            @keyup.enter="buyStock"
          ></v-text-field>
          <v-btn color="blue" disabled @click="buyOrSell(n)"> Vender </v-btn>
        </v-card-actions>

        <v-divider class="my-2"></v-divider>
      </v-card-text>
    </v-card>
  </v-layout>
</template>
<script>
export default {
  props: {
    stocks: {
      type: Array,
      required: true,
    },
  },
  methods: {
    buyOrSell(stock) {
      this.$emit("buyOrSellButtonClicked", stock);
    },
  },
};
</script>
<style scoped>
.w-calc {
  min-width: calc(30% - 1vw);
}
</style>

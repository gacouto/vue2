<template>
  <div >
    {{ testLocal }}
    <v-btn @click="reverseStocksList">reverse</v-btn>
    <StockList :stocks="stocksAvailable" @buyOrSellButtonClicked="buyStock" />
  </div>
</template>
<script>
import StockList from "../templates/StockList.vue";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  components: { StockList },
  computed: mapState({
    testLocal() {
      return 3;
    },
    stocksAvailable(state) {
      return state.stocks.stocksAvailable;
    },
  }),
  methods: {
    ...mapActions("stocks", ["buyStock"]),
    ...mapMutations("stocks",["reverseStocksList"])
  },
};
</script>

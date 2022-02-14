<template>
  <div>
    {{ testLocal }}
    <StockList :stocks="stocksAvailable" @buyOrSellButtonClicked="buyStock" />
  </div>
</template>
<script>
import StockList from "../templates/StockList.vue";
import { mapActions, mapGetters, mapState } from "vuex";
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
  },
};
</script>

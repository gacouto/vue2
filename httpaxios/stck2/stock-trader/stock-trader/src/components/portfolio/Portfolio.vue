<template>
  <div> 
    <StockList :stocks="stocksAcquired" @buyOrSellButtonClicked="sellStock" />
  </div>
</template>
<script>
import StockList from "../templates/StockList.vue";
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  components: { StockList },
  computed: {...mapState('portfolio',['stocksAcquired'])},
  methods: {
    ...mapActions("portfolio", ["sellStock","loadFromDb"]),
  },
  mounted(){
      this.loadFromDb()
  }
};
</script>

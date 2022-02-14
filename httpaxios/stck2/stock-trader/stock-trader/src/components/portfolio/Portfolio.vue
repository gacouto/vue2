<template>
  <StockList></StockList>
</template>
<script>
import StockList from "../templates/StockList.vue";
import { mapActions } from "vuex";
export default {
  components: { StockList },
  methods: {
    ...mapActions("portfolio", ["sellStock"]),
  },
};
</script>

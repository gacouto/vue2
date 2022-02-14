<template>
  <v-layout row wrap align-start justify-center>
    <v-card v-for="stock in stocks" :key="stock.id" class="pa-2 ma-2 w-calc">
      <v-toolbar card color="blue">
        <v-toolbar-title>
          <strong>{{stock.name}}</strong>(Preço:{{stock.price}})
        </v-toolbar-title>
      </v-toolbar>

      <v-card-text>
        <v-card-actions>
          <v-text-field  label="Qtd" type="number"
           v-model.number="quantity"></v-text-field>
          <v-btn color="blue" disabled @click="buyOrSell(stock)">
             {{buttonText}} </v-btn>
        </v-card-actions>

        <v-divider class="my-2"></v-divider>
      </v-card-text>
    </v-card>
  </v-layout>
</template>
<script>
export default {
  data(){
    return{
      quantity:0
      
    }
  },
  props: {
    stocks: {
      type: Array,
      required: true,
    },
  },
  methods: {
    buyOrSell(stock) {
      let stockWithQuantity = {
        quantity:this.quantity,
        ...stock
      }
      this.$emit("buyOrSellButtonClicked", stockWithQuantity);
    },
  },
  computed:{
    buttonText(){      
      if(!this.stocks) return ''
      let isPortfolio = this.stocks.quantity
      if(isPortfolio) return 'Vender'
      else return 'Comprar'    
    }
  }
};
</script>
<style scoped>
.w-calc {
  min-width: calc(30% - 1vw);
}
</style>

<template>
  <v-layout row wrap align-start justify-center>
    <v-card v-for="stock in stocks" :key="stock.id" class="pa-2 ma-2 w-calc">
      <v-toolbar card color="blue">
        <v-toolbar-title>
          <strong>{{stock.name+' '}} </strong>
           (Preço: {{'R$ '+stock.price}} 
          <span v-if="isPortfolio">{{ ' | Qtd: '+stock.quantity}}</span> )
        </v-toolbar-title>
      </v-toolbar>

      <v-card-text>
        <InputQuantity @quantityChanged="buyOrSell($event,stock)" 
        :buttonText="buttonText"
        :maxQuantity="stock.quantity" />
        <v-divider class="my-2"></v-divider>
      </v-card-text>
    </v-card>
  </v-layout>
</template>
<script>
import InputQuantity from './InputQuantity.vue';
export default {
  components: { InputQuantity },
  data(){
    return{      
      stocksWithQuantity:{        
      }
    }
  },
  props: {
    stocks: {
      type: Array,
      required: true,
    },
  },
  methods: {
    buyOrSell(inputQuantity,stock) { 
      let stockWithQuantity = {
        inputQuantity,
        ...stock
      } 
      this.$emit("buyOrSellButtonClicked", stockWithQuantity);
    } 
  },
  computed:{
    isPortfolio(){      
      if(!this.stocks) return null
      let isPortfolio = this.stocks[0].quantity
      if(isPortfolio) return true
      else return false
    },
    buttonText(){
      return this.isPortfolio ? 'Vender' : 'Comprar'
    }
  }
};
</script>
<style scoped>
.w-calc {
  min-width: calc(30% - 1vw);
}
</style>

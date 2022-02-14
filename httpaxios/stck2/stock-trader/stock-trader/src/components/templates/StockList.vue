<template>
  <v-layout row wrap align-start justify-center>
    <v-card v-for="stock in stocks" :key="stock.id" class="pa-2 ma-2 w-calc">
      <v-toolbar card color="blue">
        <v-toolbar-title>
          <strong>{{stock.name+' '}} </strong>
           (Preço: {{' '+stock.price}} 
          <span v-if="isPortfolio">{{ ' | '+stock.quantity}}</span> )
        </v-toolbar-title>
      </v-toolbar>

      <v-card-text>
        <InputQuantity @quantityChanged="buyOrSell($event,stock)" />
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
    buyOrSell(quantity,stock) { 
      let stockWithQuantity = {
        quantity,
        ...stock
      } 
      this.$emit("buyOrSellButtonClicked", stockWithQuantity);
    },
    handleKeyUp(event){
      console.log(event)
    }
  },
  computed:{
    isPortfolio(){      
      if(!this.stocks) return null
      let isPortfolio = this.stocks.quantity
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

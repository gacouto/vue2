<template>
  <v-card-actions>
    <v-text-field  
    :rules="[rules.maxQtd]"
      label="Qtd"
      type="number"
      v-model.number="quantity"
    ></v-text-field>
    <v-btn color="blue" :disabled="isMaxQuantityOverstepped" @click="sellOrBuyByQuantity">
      {{ buttonText }}
    </v-btn>
  </v-card-actions>
</template>
<script>
export default {
  props: {
    buttonText: String,
    maxQuantity:{
        type:Number,
        default:9999
    }
  },
  data() {
    return {
      quantity: 0,
      isMaxQuantityOverstepped:false,
      rules:{
          maxQtd:value=>value<=this.maxQuantity || 'passou dos limites amigao'
      }
      
    };
  },
  watch:{
      quantity(newQuantity,oldQuantity){
          if(newQuantity>this.maxQuantity){
              this.isMaxQuantityOverstepped=true
          }else{
              this.isMaxQuantityOverstepped=false
          }
      }
  },
  methods:{
      sellOrBuyByQuantity(){
          this.$emit('quantityChanged', this.quantity)
          setTimeout(()=>{this.quantity=0},100)
      }
  }
};
</script>
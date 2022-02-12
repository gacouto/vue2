<template>
    <Painel titulo="Parâmetros" vermelho>
        <div class="parametros">
            <span>
                <strong>Quantidade Padrão: </strong> 
                <input type="number" v-model="quantity">
            </span>
            <span>
                <strong>Preço Padrão: </strong>
                <input type="number" v-model="price">
            </span>
        </div>
    </Painel>
</template>

<script>
export default {
     
    computed:{
        quantity:{
            get(){
                return this.$store.state.parametros.quantity
            },
            set(val){
                this.$store.commit('setQuantity',val)
            }
        },
        price:{
            get(){
                return this.$store.state.parametros.price
            },
            set(val){
                this.$store.commit('setPrice',val)
            }
        }
    }
}
</script>

<style>
    .parametros {
        display: flex;
        justify-content: space-around;
    }
</style>

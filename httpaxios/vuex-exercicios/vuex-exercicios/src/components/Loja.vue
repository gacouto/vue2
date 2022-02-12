<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantity">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="price">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>
import { mapActions} from 'vuex'
export default {
    data() {
        return {
            sequencia: 1, 
        }
    },
    computed:{
        quantity(){
            return this.$store.state.parametros.quantity
        },
        price(){
            return this.$store.state.parametros.price
        },
    },
    methods: {
        ...mapActions(['addProduct']),
        //...mapMutations(['addProduct']),
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantity,
                preco: this.price
            }
            this.sequencia++
            // eslint-disable-next-line
            console.log(produto)
            //this.$store.state.produtos.push(produto)
            //this.$store.commit('addProduct',produto)
            //this.addProduct(produto)
            this.$store.dispatch('addProduct',produto)
            console.log(this.$store.getters.getCompleteName)
        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>

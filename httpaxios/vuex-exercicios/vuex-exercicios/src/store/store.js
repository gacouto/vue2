import Vue from 'vue'
import Vuex from 'vuex'
import carrinho from './modules/carrinho'
import parametros from './modules/parametros'
import payers from './modules/payers'
import * as getters from './modules/getters'

Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        name:'Pizzaman',
        middlename:'Calabresa',

    },
    getters,
    modules:{carrinho,parametros,payers},
     
})

export default store
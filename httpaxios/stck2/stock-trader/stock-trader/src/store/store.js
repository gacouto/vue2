import Vue from 'vue'
import Vuex from 'vuex'
import carrinho from './modules/carrinho'  
import stocks from './modules/stocks'  

Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        name:'Pizzaman',
        middlename:'Calabresa',

    }, 
    modules:{stocks},
     
})

export default store
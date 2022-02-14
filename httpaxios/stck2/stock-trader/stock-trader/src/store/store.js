import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './modules/stocks'
import portfolio from './modules/portfolio'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        todaysBalance: 10000
    },
    mutations:{
        decreaseBalance(state,price){ 
            state.todaysBalance-=price 
        }
    },
    getters: {
        getTodaysBalanceFormatted({ todaysBalance }) {
            let stringBal = todaysBalance.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            })
            return stringBal
        }
    },
    actions: {
        addStockToPortfolio({dispatch,commit},stockWithQuantity) {
            let totalDebt = stockWithQuantity.price * stockWithQuantity.quantity  
            commit('decreaseBalance',totalDebt)
            dispatch('portfolio/addStockToPortfolio',stockWithQuantity)
         }
    },
    modules: { stocks, portfolio },

})

export default store
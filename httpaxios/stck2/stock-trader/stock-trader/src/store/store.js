import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './modules/stocks'
import portfolio from './modules/portfolio'


Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        todaysBalance: 10000
    },
    mutations: {
        decreaseBalance(state, price) {
            state.todaysBalance -= price
        },
        increaseBalance(state, price) {
            state.todaysBalance += price
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
        async addStockToPortfolio({ dispatch, commit, state }, stockWithQuantity) {
            let totalDebt = stockWithQuantity.price * stockWithQuantity.inputQuantity
            commit('decreaseBalance', totalDebt)
            dispatch('portfolio/addStockToPortfolio', stockWithQuantity)

        },
        addProfit({ commit }, profit) {
            commit('increaseBalance', profit)
        },
        async saveAllOnDb({dispatch,state}){
            await this._vm.$http.patch('/stocktrader/todaysBalance.json',{todaysBalance:state.todaysBalance}).then(dat => {
                dispatch('portfolio/saveOnDb')
                dispatch('stocks/saveOnDb')                
            })
        },
        loadAllFromDb({ dispatch }) {
            dispatch('portfolio/loadFromDb')
            dispatch('stocks/loadFromDb')
        }
    },
    modules: { stocks, portfolio },

})

export default store
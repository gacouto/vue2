import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './modules/stocks'
import portfolio from './modules/portfolio'
import BalanceService from './services/BalanceService'


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
        },
        setNewBalance(state,balance){
            state.todaysBalance = balance
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
        async loadAllFromDb({ dispatch,commit }) {
            let tin = await BalanceService.get()
            console.log("🚀 ~ file: store.js ~ line 51 ~ loadAllFromDb ~ tin", tin)
              await this._vm.$http.get('/stocktrader/todaysBalance.json').then(({data})=>{
                  commit('setNewBalance',data.todaysBalance)
                  dispatch('portfolio/loadFromDb')
                  dispatch('stocks/loadFromDb')
              })
        }
    },
    modules: { stocks, portfolio },

})

export default store
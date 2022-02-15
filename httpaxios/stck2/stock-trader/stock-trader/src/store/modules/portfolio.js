
export default {
    namespaced: true,
    state: {
        stocksAcquired: []
    },
    getters: {
        getStockById(state) {
            //return stockId => state.stocksAcquired. 
        }
    },
    mutations: {
        addToStocks({ stocksAcquired }, stockWithQuantity) {
            //deprecated
            let indexOfStock = stocksAcquired.findIndex(
                (stock) => stock.id === stockWithQuantity.id)

            let isStockAlreadyPresent = indexOfStock > -1
            if (isStockAlreadyPresent) {
                stocksAcquired[indexOfStock].quantity += stockWithQuantity.inputQuantity
            }
            else {
                let newStockWithQuantity = {
                    ...stockWithQuantity,
                    quantity: stockWithQuantity.inputQuantity
                }
                delete newStockWithQuantity.inputQuantity
                stocksAcquired.push(newStockWithQuantity)
            }

        },
        addStock(state, newStockWithQuantity) {
            state.stocksAcquired.push(newStockWithQuantity)
        },
        changeStockQuantity(state, { indexOfStock, newQuantity }) {
            state.stocksAcquired[indexOfStock].quantity += newQuantity
        },

        removeFromStocks(state, { stockWithQuantity, indexOfStock }) {
            let stock = state.stocksAcquired[indexOfStock]
            if (stock.quantity <= stockWithQuantity.inputQuantity) {
                state.stocksAcquired.splice(indexOfStock, 1)
            } else {
                stock.quantity -= stockWithQuantity.inputQuantity
            }
        },
        updateFlutuatePortfolioPrice(state, { newPrice, stockId }) {
            let indexOfStock = state.stocksAcquired.findIndex(stock => stock.id === stockId)
            if (indexOfStock >= 0) {
                state.stocksAcquired[indexOfStock].price = newPrice
            }
        },
        setStocksAcquired(state,stocks){
            state.stocksAcquired = stocks
        }
    },
    actions: {
        async sellStock({ commit, dispatch, state }, stockWithQuantity) {

            let indexOfStock = state.stocksAcquired.findIndex(
                (stock) => stock.id === stockWithQuantity.id)
            let profit = state.stocksAcquired[indexOfStock].price * stockWithQuantity.inputQuantity

            commit('removeFromStocks', { stockWithQuantity, indexOfStock })
            dispatch('addProfit', profit, { root: true })
            await this._vm.$http.patch('/stocktrader/portfolio.json',{stocksAcquired: state.stocksAcquired}).then(({ data }) => {
            })
        },
        async addStockToPortfolio({ commit, state }, stockWithQuantity) {
            //commit('addToStocks', stockWithQuantity)            
            let indexOfStock = state.stocksAcquired.findIndex(
                (stock) => stock.id === stockWithQuantity.id)

            let isStockAlreadyPresent = indexOfStock > -1
            if (isStockAlreadyPresent) {
                commit('changeStockQuantity', { indexOfStock, newQuantity: stockWithQuantity.inputQuantity })
            }
            else {
                let newStockWithQuantity = {
                    ...stockWithQuantity,
                    quantity: stockWithQuantity.inputQuantity
                }
                delete newStockWithQuantity.inputQuantity
                commit('addStock', newStockWithQuantity)
            }
            

        },
        async saveOnDb({state}){
            await this._vm.$http.patch('/stocktrader/portfolio.json',
             { stocksAcquired: state.stocksAcquired }).then(dat => {
            })
        },
        async loadFromDb({commit}){
            await this._vm.$http.get('/stocktrader/portfolio.json').then(({ data }) => {
                let nonNullArray = data.stocksAcquired.filter(stock=>stock)
                commit('setStocksAcquired',nonNullArray) 
            })
        }
    }
}
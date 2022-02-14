
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
        }
    },
    actions: {
        sellStock({ commit, dispatch, state }, stockWithQuantity) {
            this._vm.$http.get('animes.json').then(({ data }) => {

                let indexOfStock = state.stocksAcquired.findIndex(
                    (stock) => stock.id === stockWithQuantity.id)
                let profit = state.stocksAcquired[indexOfStock].price * stockWithQuantity.inputQuantity

                commit('removeFromStocks', { stockWithQuantity, indexOfStock })
                dispatch('addProfit', profit, { root: true })
            })
        },
        addStockToPortfolio({ commit }, stockWithQuantity) {
            commit('addToStocks', stockWithQuantity)

        }
    }
}
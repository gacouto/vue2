
export default {
    namespaced: true,
    state: {
        stocksAcquired: []
    },
    getters: {

    },
    mutations: {
        addToStocks({ stocksAcquired }, stockWithQuantity) {
             
            let indexOfStock = stocksAcquired.findIndex(
                (stock) => stock.id === stockWithQuantity.id)

            let isStockAlreadyPresent = indexOfStock > -1
            if (isStockAlreadyPresent) {
                stocksAcquired[indexOfStock].quantity += stockWithQuantity.quantity
            }
            else {
                stocksAcquired.push(stockWithQuantity)

            }

        }
    },
    actions: {
        buyStock(c, stockWithQuantity) {

            this._vm.$http.get('animes.json').then(({ data }) => {

                console.log('how' + data)
            })
        },
        addStockToPortfolio({ commit }, stockWithQuantity) {
            commit('addToStocks', stockWithQuantity) 

        }
    }
}
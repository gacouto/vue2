
export default {
    namespaced: true,
    state: {
        stocksAvailable: [
            { id: 1, name: 'Apple', price: 12 },
            { id: 2, name: 'BMW', price: 22 },
            { id: 3, name: 'QWST', price: 42 },
            { id: 4, name: 'Google', price: 552 },
        ]
    },
    getters: {

    },
    mutations: { 
        updateStockPrice(state, { newPrice, index }) {
            state.stocksAvailable[index].price = newPrice
        },
        setStocksAvailable(state,stocks){
            state.stocksAvailable = stocks
        }
    },
    actions: {
        buyStock({ state, rootState, commit, dispatch }, stockWithQuantity) {
            /* this._vm.$http.get('/').then(({ data }) => {
                
            }) */
            dispatch('addStockToPortfolio', stockWithQuantity, { root: true })
        },
        callItADay({ commit, dispatch, state }) {
            console.log("🚀 ~ file: stocks.js ~ line 37 ~ callItADay ~ state", state)
            state.stocksAvailable.forEach((stock, index) => {
                let priceIntervalMax = stock.price + 70
                let priceIntervalMin = stock.price - 50
                let newPrice = Math.random() * (priceIntervalMax - priceIntervalMin + 1) + priceIntervalMin
                newPrice = Math.ceil(newPrice)
                commit('updateStockPrice', { newPrice, index })
                commit('portfolio/updateFlutuatePortfolioPrice', { newPrice, stockId: stock.id },{root:true})


            })

        },
        async startDb({state}){
                let data = {stocksAvailable:state.stocksAvailable} 
              await this._vm.$http.patch('/stocktrader/stocks.json',data).then(({ data }) => {})
                
        },
        async loadFromDb({commit}){
            await this._vm.$http.get('/stocktrader/stocks.json').then(({ data }) => {
                let nonNullArray = data.stocksAvailable.filter(stock=>stock)
                commit('setStocksAvailable',nonNullArray)
                console.log("🚀 ~ file: stocks.js ~ line 51 ~ awaitthis._vm.$http.get ~ data ", data )
            })
        }
    }
}

export default {
    namespaced: true,
    state: {
        stocksAvailable: [
          
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
        },
        reverseStocksList(state){
            state.stocksAvailable.reverse()
        }
    },
    actions: {
        buyStock({ state, rootState, commit, dispatch }, stockWithQuantity) {
            /* this._vm.$http.get('/').then(({ data }) => {
                
            }) */
            dispatch('addStockToPortfolio', stockWithQuantity, { root: true })
        },
        callItADay({ commit, dispatch, state }) {
            state.stocksAvailable.forEach((stock, index) => {
                let priceIntervalMax = stock.price + 70
                let priceIntervalMin = stock.price - 50
                let newPrice = Math.random() * (priceIntervalMax - priceIntervalMin + 1) + priceIntervalMin
                newPrice = Math.ceil(newPrice)
                commit('updateStockPrice', { newPrice, index })
                commit('portfolio/updateFlutuatePortfolioPrice', { newPrice, stockId: stock.id },{root:true})


            })

        }, 
        async saveOnDb({state}){
            let data = {stocksAvailable:state.stocksAvailable} 
            
            console.log("🚀 ~ file: stocks.js ~ line 46 ~ saveOnDb ~ data", data)
            await this._vm.$http.patch('/stocktrader/stocks.json',data).then(({ data }) => {})
             
        },
        async loadFromDb({commit}){
            await this._vm.$http.get('/stocktrader/stocks.json').then(({ data }) => {
                let nonNullArray = data.stocksAvailable.filter(stock=>stock)
                commit('setStocksAvailable',nonNullArray) 
            })
        },
        
    }
}
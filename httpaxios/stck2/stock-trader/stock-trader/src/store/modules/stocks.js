 
export default {
    namespaced:true,
    state: {
         stocksAvailable:[
             {id:1,name:'Apple',price:12},
             {id:2,name:'BMW',price:22},
             {id:3,name:'QWST',price:42},
             {id:4,name:'Google',price:552},
         ]
    },
    getters: {
        
    },
    mutations:{ 
        changeAllStocksPrices(state){
            state.stocksAvailable.forEach((stock)=>{
                let priceIntervalMax = stock.price+150
                let priceIntervalMin = stock.price-50
                let flutuation = Math.random() * (priceIntervalMax -  priceIntervalMin+1) + priceIntervalMin
                stock.price = Math.ceil(flutuation)
                console.log("🚀 ~ file: stocks.js ~ line 22 ~ state.stocksAvailable.forEach ~ flutuation", flutuation)
            })
        }
    },
    actions:{
        buyStock({state,rootState,commit,dispatch},stockWithQuantity){  
            this._vm.$http.get('animes.json').then(({data})=>{
                 dispatch('addStockToPortfolio',stockWithQuantity,{root:true})
                
                })
        },
        callItADay({commit}){
            commit('changeAllStocksPrices')
        }
    }
}
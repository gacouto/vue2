 
export default {
    namespaced:true,
    state: {
         stocksAcquired:[]
    },
    getters: {
        
    },
    mutations:{ 
        
    },
    actions:{
        buyStock(c,stockWithQuantity){
            console.log(stockWithQuantity)
            
            this._vm.$http.get('animes.json').then(({data})=>{
                 
                console.log('how'+data)})
        }
    }
}
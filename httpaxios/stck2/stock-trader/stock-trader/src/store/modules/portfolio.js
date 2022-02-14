 
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
        sellStock(c,quantity){
            console.log(quantity)
            
            this._vm.$http.get('animes.json').then(({data})=>{
                 
                console.log('how'+data)})
        }
    }
}
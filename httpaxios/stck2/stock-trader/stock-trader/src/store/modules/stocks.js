 
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
        
    },
    actions:{
        buyStock(c,quantity){
            console.log(quantity)
            
            this._vm.$http.get('animes.json').then(({data})=>{
                 
                console.log('how'+data)})
        }
    }
}
import axios from "axios"

export default {
    namespaced:true,
    state: {
         
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
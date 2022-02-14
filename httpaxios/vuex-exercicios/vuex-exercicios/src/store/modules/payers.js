export default {
    namespaced:true,
    state: { 
        payersList:[]
    }, 
    getters:{
        allPayers(state){
            return state.payersList.join(',')
        }
    },
    mutations:{ 
        addToPayersList(state,payer){
            state.payersList.push(payer)
        }
        
    }, 
    actions:{
        addPayer({commit},payerName){
            commit('addToPayersList',payerName)
        }
    }
}
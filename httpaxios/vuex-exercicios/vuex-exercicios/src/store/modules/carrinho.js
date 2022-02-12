export default {
    namespaced:true,
    state: {
        produtos: [
           /*  { id: 1, nome: 'Produto 1', quantidade: 7, preco: 14.55 },
        { id: 2, nome: 'Produto 2', quantidade: 10, preco: 22.99 },
        { id: 3, nome: 'Produto 3', quantidade: 1, preco: 43.18 },
         */
        ], 
    },
    getters: {
        valorTotal(state,getters,rootState) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    mutations:{
        addProduct(state,productPayload){
            state.produtos.push(productPayload)
        },
        
    },
    actions:{
        globalShowOff:{
            root:true,
            handler:({getters})=>{console.log(`globalShowOff vt ${getters.valorTotal}`)},
        },
        addProduct(context,payload){
            //context.rootState
            setTimeout(()=>{
                context.commit('addProduct',payload)
            },2000)
        }
    }
}
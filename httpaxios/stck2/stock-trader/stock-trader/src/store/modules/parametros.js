export default {
    state: { 
        quantity:1,
        price:2
    }, 
    mutations:{ 
        setQuantity(state,payload){
            state.quantity=payload
        },
        setPrice(state,payload){
            state.price=payload
        },
        
    }, 
}
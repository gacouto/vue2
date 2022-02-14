import Vue from 'vue'
import Vuex from 'vuex' 
import stocks from './modules/stocks'  
import portfolio from './modules/portfolio'  

Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        todaysBalance:10000
    }, 
    modules:{stocks,portfolio},
     
})

export default store
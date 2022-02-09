import Vue from 'vue'
import axios from 'axios'
const baseURL = 'https://cursovue-dcc88-default-rtdb.firebaseio.com/'
//axios.defaults.baseURL = baseURL

Vue.use({
    install(Vue){
        //Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL:baseURL
        })
        Vue.prototype.$http.interceptors.request.use(config=>{
            
            return config
        },error=>Promise.reject(error))
        
        Vue.prototype.$http.interceptors.response.use((res)=>{
            let {data} = res
            
            let arrayWithIds =[]
            for (const animeId in data) {
                arrayWithIds.push({
                    animeId,
                    ...data[animeId]
                })
            } 
            res.data = arrayWithIds
            return res
        },error=>Promise.reject(error))
        
    }
})
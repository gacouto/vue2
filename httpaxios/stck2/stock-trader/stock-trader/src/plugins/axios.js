import Vue from 'vue'
import axios from 'axios'
const baseURL = 'https://cursovue-dcc88-default-rtdb.firebaseio.com/'
//axios.defaults.baseURL = baseURL

Vue.use({
    install(Vue){
        //Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL:baseURL,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Methods' : '*',
                'Access-Control-Allow-Credentials' : true
              }
            /* headers:{
                Authorizss:'yup'
            } */
        })
        Vue.prototype.$http.interceptors.request.use(config=>{
            
            return config
        },error=>Promise.reject(error))
        
        Vue.prototype.$http.interceptors.response.use((res)=>{
           /*  let {data} = res
            
            let arrayWithIds =[]
            for (const id in data) {
                arrayWithIds.push({
                    id,
                    ...data[id]
                })
            } 
            res.data = arrayWithIds */
            return res
        },error=>Promise.reject(error))
        
    }
})
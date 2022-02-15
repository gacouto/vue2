
import axios from 'axios'
const baseURL = 'https://cursovue-dcc88-default-rtdb.firebaseio.com/'
const connection = axios.create({
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
export default connection
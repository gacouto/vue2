import Vue from 'vue'
import App from './App.vue'
import './plugins/axios'
import router from '@/router'
import './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')

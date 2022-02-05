import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('redTextDirective',{
	bind(el,binding,vnode){
		el.style.color = 'red'
		if(binding.arg==='borda'){
			
			el.style.border = `1px solid ${binding.value}`
		}
		if(binding.value){
			el.style.color = binding.value
		}
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')

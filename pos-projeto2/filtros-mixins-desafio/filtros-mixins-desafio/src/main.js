import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('sizeOfWords',function(val){
	let arrWords = val.split(' ')
	let newPhrase = ''
	for(let word of arrWords){
		let charactersNumber = word.length
		console.log(word)
		let newword = `${word} (${charactersNumber}) `		
		newPhrase+= newword
	}	
	return newPhrase
})
 
new Vue({
	render: h => h(App),
}).$mount('#app')

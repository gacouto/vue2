new Vue({
	el: '#desafio',
	data: {
		isEncolhida:false,
		classeEncolhe:{
			'destaque':!this.isEncolhida,
			'encolher':this.isEncolhida
		},
		classeInformada3:'',
		classeInformada4:'',
		classeTrueFalse4:'false',
		alturaInformada:'',
		progressBarEstilo:{backgroundColor:'blue',height:'20px',width:'0px'},
	},
	methods: {
		iniciarEfeito() {
			setInterval(()=>{
				let classes = {
					'destaque':this.isEncolhida,
					'encolher':!this.isEncolhida				}
					
				this.isEncolhida= !this.isEncolhida
				this.classeEncolhe = classes
			},1000)
		},
		iniciarProgresso() {
			setInterval(()=>{
				let tamanho=this.progressBarEstilo.width.split('px')[0]
				
				tamanho=Number(tamanho)+1
				if(tamanho>100) {
					tamanho=0
				}
				this.progressBarEstilo.width=`${tamanho}px`
			},100)
		}
	},
	computed:{
		classeGerada(){
			let isBordado = false
			if(this.classeTrueFalse4==='true') 
			{
				isBordado = true
			}

			return [
				this.classeInformada4,
				{'bordado':isBordado}
			]
		},
		alturaBackgroundEstilo(){
			return {
				backgroundColor:'green',
				height:`${this.alturaInformada}px`
			}
		}
	}
})

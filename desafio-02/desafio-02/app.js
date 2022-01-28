new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        armazenar(event){
            this.valor=event.target.value
        },
        alertar(){
            alert('bom dia')
        }
    }
})
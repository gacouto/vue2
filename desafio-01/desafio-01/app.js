new Vue({
    el:'#desafio',
    data:{
        idade:24,
        nome:'Gabriel_Couto',
        imagemUrl:'https://qwst.co/images/kpis.jpg'
    },
    methods:{
        numeroAleatorio(){
            return Math.random()
        }
    },
    computed:{
        nomeEidade(){
            return `${this.nome} (${this.idade})`
        }
    }
})
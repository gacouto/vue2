//@ts-check
new Vue({
    el: '#app',
    data: { 
        vidaJogador: 100,
        vidaMonstro: 100,
        isBatalhaIniciada:false,
        logDeBatalha:[],
        mensagemFinal:{
            msg:'',
            estilo:{
                color:'red',
                fontWeight:'600'
            }
        }
    },
    methods: {
        inteiroAleatorioEntre(max,min){
            
            let aleatorio= Math.random()*(max-min)+min
            return Math.ceil(aleatorio);
        },
        calculaVidaEstilo(valorVida) {
            let cor = 'green'
            if(valorVida<50){
                cor='red'
            }

            let larguraVida = valorVida / 4
            let larguraVw = larguraVida + 'vw'
            
            return {
                backgroundColor: cor,
                width: larguraVida + 'vw'
            }
        },
        reset(){            
            this.vidaJogador = 100
            this.vidaMonstro = 100      
            this.mensagemFinal.msg = ''      
            this.logDeBatalha = []
        },
        iniciar(){
            this.reset()
            this.isBatalhaIniciada = true
        },
        alteraVidaJogadorMonstro(arrRangeDanoMonstro,arrRangeDanoJogador) {
            
            let danoMonstro = this.inteiroAleatorioEntre(...arrRangeDanoMonstro)
            let danoJogador = this.inteiroAleatorioEntre(...arrRangeDanoJogador)
            
            this.vidaJogador += danoMonstro
            this.logDeBatalha.unshift(`Monstro atingiu jogador com ${danoMonstro}`)
            
            this.vidaMonstro += danoJogador
            this.logDeBatalha.unshift(`Jogador atingiu monstro com ${danoJogador}`)
            
            if(this.vidaMonstro<=0){
                this.mensagemFinal.msg = 'Você ganhou'
                this.mensagemFinal.estilo.color = 'green'
                this.isBatalhaIniciada = false
                return
            }
            if(this.vidaJogador<=0){
                this.mensagemFinal.msg = 'Você perdeu'
                this.isBatalhaIniciada = false
            }
        },
        ataque() {
            //todo ser aleatorio
            let rangeDanoJogador = [-3,-5]
            let rangeDanoMonstro = [-5,-7]
            this.alteraVidaJogadorMonstro(rangeDanoMonstro,rangeDanoJogador)
        },
        ataqueEspecial(){
            let rangeDanoMonstro = [-3,-5]
            let rangeDanoJogador = [-5,-7]
            this.alteraVidaJogadorMonstro(rangeDanoMonstro,rangeDanoJogador) 
        },
        cura(){            
            let rangeDanoMonstro = [5,2]
            let rangeDanoJogador = [-4,-7]
            this.alteraVidaJogadorMonstro(rangeDanoMonstro,rangeDanoJogador)
        },
        desistir(){
            this.reset()
            this.isBatalhaIniciada = false
        }
    },
    computed: {
        vidaJogadorProgresso() {
            return this.calculaVidaEstilo(this.vidaJogador)

        },
        vidaMonstroProgresso() {
            return this.calculaVidaEstilo(this.vidaMonstro)
        },


    },

})
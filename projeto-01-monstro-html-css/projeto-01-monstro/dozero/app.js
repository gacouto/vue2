//@ts-check
new Vue({
    el: '#app',
    data: {
        barra: '',
        vidaJogador: 100,
        vidaMonstro: 100,
        isBatalhaIniciada:false,
        logDeBatalha:[]
    },
    methods: {
        calculaVidaEstilo(valor, cor) {
            let larguraVida = this.vidaJogador / 4
            let larguraVw = larguraVida + 'vw'

            return {
                backgroundColor: cor,
                width: larguraVida + 'vw'
            }
        },
        iniciar(){
            this.isBatalhaIniciada = true
        },
        alteraVidaJogadorMonstro(danoMonstro,danoJogador) {
            this.vidaJogador += danoMonstro
            this.logDeBatalha.unshift(`Monstro atingiu jogador com ${danoMonstro}`)
            
            this.vidaMonstro += danoJogador
            this.logDeBatalha.unshift(`Jogador atingiu monstro com ${danoJogador}`)
        },
        ataque() {
            //todo ser aleatorio
            this.alteraVidaJogadorMonstro(-7, -5)
        },
        ataqueEspecial(){
            this.alteraVidaJogadorMonstro(-5,-7)
        },
        cura(){
            this.alteraVidaJogadorMonstro(5,-6)
        },
        desistir(){
            this.vidaJogador = 100
            this.vidaMonstro = 100
            this.isBatalhaIniciada = false
        }
    },
    computed: {
        vidaJogadorProgresso() {
            return this.calculaVidaEstilo(this.vidaJogador, 'red')
        },
        vidaMonstroProgresso() {
            return this.calculaVidaEstilo(this.vidaMonstro, 'green')
        }

    },

})
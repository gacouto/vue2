//@ts-check
new Vue({
    el: '#app',
    data: {
        barra: '',
        vidaJogador: 100,
        vidaMonstro: 100
    },
    methods: {
        calculaVida(valor, cor) {
            let larguraVida = this.vidaJogador / 4
            let larguraVw = larguraVida + 'vw'

            return {
                backgroundColor: cor,
                width: larguraVida + 'vw'
            }
        },
        alteraVidaJogadorMonstro(vidaJogador,
            vidaMonstro) {
            this.vidaJogador += vidaJogador
            this.vidaMonstro += vidaMonstro

        },
        ataque() {
            
            this.alteraVidaJogadorMonstro(-7, -5)
        },
        ataqueEspecial(){
            this.alteraVidaJogadorMonstro(-5,-7)
        },
        cura(){
            this.alteraVidaJogadorMonstro(5,-6)
        },
        desistir(){

        }
    },
    computed: {
        vidaJogadorProgresso() {
            return this.calculaVida(this.vidaJogador, 'red')
        },
        

        vidaMonstroProgresso() {
            return this.calculaVida(this.vidaMonstro, 'green')
        }

    },

})
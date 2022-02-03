<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
             
        </span> 
        {{ numero }} {{ indice }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            numero: 0,
            citacoes: [{
                fonte: 'Jornal do Empreendedor',
                texto: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
                autor: 'Margaret Mead'
            }, { 
                fonte: 'Frases de Mãe',
                texto: 'Isso não é um quarto, é um chiqueiro.',
                autor: 'Roberta'
            }, {
                fonte: 'Frases de Pai',
                texto: 'Vou contar até 3! 1, 2, 2...',
                autor: 'Gustavo'
            }]
        }
    },
    methods:{ 
    },
    computed: {
        indice() {
            
            let result = this.numero % 3 
            let indice = Math.abs(result)

            let quote = this.citacoes[indice]
            this.$emit('onChangedIndex',quote)
            
            return indice
        }
    }
}
</script>

<style scoped>
    .citacoes {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid red;
    }
</style>

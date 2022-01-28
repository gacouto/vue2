new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    watch:{
        valor(prev,next){
            setTimeout(()=>{
                this.valor=0
            },5000)
        }
    },
    computed:{
        resultado(){
            if(this.valor==37){
                return 'Valor Igual'
            }
            return 'Valor Diferente'

        }
    }
});
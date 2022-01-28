//@ts-check
new Vue({
    el: '#app',
    data:{
        barra: '',
        vidaJogador:100,
        vidaMonstro:100
    },
   methods:{

   },
   computed:{
    vidaJogadorProgresso(){
        
        let n = 0
        
           return{
               backgroundColor:'red',
               height:'112px',
               width:'10%'
           }
       }

   }

})
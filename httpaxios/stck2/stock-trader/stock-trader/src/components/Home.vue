<template>
    <div>
        <h1>Negocie e consult suas açoes</h1>
         <v-alert
      :value="true"
      color="info"
      icon="info"
      outline    >
      Você pode salvar e carregar dados
    </v-alert>
    
     <v-alert
      :value="true"
      color="success"
      icon="check_circle"
      outline    >
      Clique em finalizar dia para flutuar os preços
    </v-alert>
    <h2>Seu saldo é   {{getTodaysBalanceFormatted}}</h2>
    
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters(["getTodaysBalanceFormatted"])
    }
}
</script>
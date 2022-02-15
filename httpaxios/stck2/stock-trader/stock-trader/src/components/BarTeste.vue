<template>
    <v-alert
      :value="true"      
      :type="alertType" >
      Você pode salvar 
      <slot v-bind:propReversa="alertType"></slot>
       e carregar dados
    </v-alert>
</template>
<script>
export default {
  data() {
    return {
      alertType: 'error',
    };
  },
  methods:{
    callMeBack(){
      this.alertType='info'
      console.log('MANDA BRAZA')
    }
  }
}
</script>
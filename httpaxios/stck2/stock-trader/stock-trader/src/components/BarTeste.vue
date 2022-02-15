<template>
    <v-alert
      :value="true"
      color="info"
      icon="info"
      outline    >
      Você pode salvar 
      <slot :propReversa="'callMeBack'"></slot>
       e carregar dados
    </v-alert>
</template>
<script>
export default {
  methods:{
    callMeBack(){
      console.log('MANDA BRAZA')
    }
  }
}
</script>
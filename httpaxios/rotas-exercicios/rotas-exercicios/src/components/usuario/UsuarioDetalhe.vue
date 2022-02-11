<template>
    <div>
        <h2>detalhes do usuario {{iduser}}</h2>
        <h2>comida favorita: {{$route.query.favoriteFood}}</h2>
        <router-link tag="button" primario
         :to="`${iduser}/editar`" >editar</router-link>
        <hr>
        
        <div class="space">
        </div>
          <h4 > copyright etc</h4>
        <hr>
    </div>
</template>
<script>
export default {    
  props: ["iduser"],
}
</script>
<style scoped>
.space{
  height: 1000px;
}
</style>
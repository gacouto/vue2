<template>
    <div>
        <h2>detalhes do usuario {{iduser}}</h2>
        <router-link tag="button" primario
         :to="`${iduser}/editar`" >editar</router-link>
        <hr>
    </div>
</template>
<script>
export default {    
  props: ["iduser"],
}
</script>
<template>
  <nav class="menu">
    <div>
        <router-link to="/usuario"> usuario</router-link>
    <router-link :to="'/usuario/1'" active-class="active" tag="span"
      >user 1</router-link    >
    <router-link  to="/usuario/2" active-class="active" tag="span">
      | user 2</router-link    >
    </div>


    <router-link exact to="/" tag="a" sucesso 
     active-class="active">inicio</router-link    >
  </nav>
</template>
<script>
export default {};
</script>
<style scoped>
</style>
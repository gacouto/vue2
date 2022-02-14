<template>
  <div>
    <h2>detalhes do usuario {{ iduser }}</h2>
    <h2>comida favorita: {{ $route.query.favoriteFood }}</h2>
    <router-link tag="button" primario :to="`${iduser}/editar`"
      >editar</router-link
    >
    <hr />

    <hr />
    <div class="space"></div>
    <h4 id="footer">copyright etc</h4>
    <input type="checkbox" name="leave" v-model="canUserLeavePage" />
    ir embora
  </div>
</template>
<script>
export default {
  props: ["iduser", "isTokenPresent"],
  data() {
    return {
      canUserLeavePage: false,
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.canUserLeavePage || confirm("Tem certeza?")) {
      next();
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log("monitorei mudança dentro do componente");

    const evenIdsRedirectToStart = (virtualInstance) => {
      console.log("virtualInstance iduser é" + virtualInstance.iduser);
      console.log("  iisTokenPresent é " + virtualInstance.isTokenPresent);
      if (virtualInstance.iduser % 2 === 0) {
        next("/");
      }
    };

    next(evenIdsRedirectToStart);
  },
};
</script>
<style scoped>
.space {
  height: 1000px;
}
</style>
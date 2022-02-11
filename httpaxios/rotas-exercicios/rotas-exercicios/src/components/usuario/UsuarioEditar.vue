<template>
  <div>
    <h4>edita usuario{{ iduser }}</h4>

    <router-link tag="button" primario to="/">save</router-link>
  </div>
</template>
<script>
export default {
  props: ["iduser"],
};
</script>
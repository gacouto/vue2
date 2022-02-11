<template>
  <div>
    <h1>componente usuario</h1>
    <hr />
    <router-view name="anotacoes"></router-view>
    <hr />
    <router-view></router-view>
    <button sucesso @click="goToStart">back</button>
  </div>
</template>
<script>
export default {
  methods: {
    goToStart() {
      this.$router.push({ path: "/" });
      //tambem aceita this.$router.push('/')
    },
  },
  /* data(){
        return{ id:1}
    },
    watch:{
        $route(to,from){
            this.id=to.params.paramzin
        }
    },
    mounted(){
        console.log(this.$route.params.paramzin)
    } */
};
</script>
<template>
  <div>
    <h1>contadores</h1>
    <p>contador {{ contador }}</p>
    <span @click="add">+</span>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      contador: 0,
    };
  },
  methods:{
    add(){
      /* eslint-disable no-debugger */
      debugger 
      this.contador++
    }
  }
};
</script>
<style scoped>
</style>
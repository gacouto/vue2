<template>
  <div class="alturaBarra">
    <section class="alturaBarra" :style="{ width: `${progress}%` }">
      <span>{{ progress }}%</span>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    progress: Number,
  },
};
</script>
<style scoped>
div {
  margin: 1vw;
  width: 100px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  position: relative;
}
section {
  background-color: green;
  position: absolute;
  left: 0;  
  box-shadow: 0px 3px 2vw green;
}
span {
  display: flex;
  justify-content: center;
}
.alturaBarra {
  height: 4vw;
}
</style>
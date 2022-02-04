<template>
  <div class="outerbar">
    <section class="fillbar" :style="{ width: `${progress}%` }"></section>
    <span class="percentage">{{ progress }}%</span>
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
.outerbar {
  margin: 1vw;
  width: 90%;
  border: 1px solid rgba(0, 0, 0, 0.5);
  height: calc(5% - 1rem);

  display: flex;
  justify-content: flex-start;
  position: relative;
}
.fillbar {
  background-color: green;
  height: 100%;
  box-shadow: 0px 3px 2vw green;
  z-index: 0;
}
.percentage {
  position: absolute;
  right: calc(50% - 1.6rem);
  z-index: 12;
}
</style>
<template>
  <div class="sl-container" @click="$emit('input',!value)">
    <div class="sliding"></div>
    <div class="slider" :style="selectedInput"></div>
  </div>
</template>
<script>
export default {
  props: {
    value: Boolean,
  },
  computed: {
    selectedInput() {
      let obj = this.value
        ? { left: "22px", backgroundColor: "aqua" }
        : { left: 0, backgroundColor: "black" };
      return obj;
    },
  },
};
</script>
<style scoped>
.sl-container {
  position: relative;
  height: 7px;
  width: 70px;
}
.sliding { 
  height: 5px;
  width: 30px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15%;
}
.slider {
  position: absolute;
  top:-5px;
  height: 15px;
  width: 12px;
  border-radius: 100%;
  background-color: aqua;
}
</style>
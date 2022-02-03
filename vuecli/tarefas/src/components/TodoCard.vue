<template>
  <span>
    <button @click="$emit('onItemDelete', item)">X</button>
    <span :class="selectedStyle" class="card"
     @click="$emit('onItemSelected', item)"
      >{{ item.name }}
    </span>
  </span>
</template>
<script>
export default {
  props: {
    item: Object,
    isSelected: Boolean,
  }, 
  computed: {
    selectedStyle() {
      return this.isSelected ? "selected" : "unselected";
    },
  },
};
</script>
<style scoped>
.card {
  margin: 0.7vw;
  padding: 1.7vw 0.7vw;
  border-radius: 0.1vw 0.5vw;
  box-shadow: 0px 3px 2vw red;
}
.unselected {
  background: red;
}
.selected {
  background: green;
  text-decoration: line-through;
  box-shadow: 0px 3px 2vw green;
}
button {
  border: none;
  color: white;
  background: black;
  font-size: 1vw;
  padding: 0.5vw;
}
</style>
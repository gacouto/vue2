<template>
  <div
    :class="{ isSelected, unselected: !isSelected }"
    class="card marginpading"
    @click="$emit('onItemSelected', item)"
  >
    {{ item.name }}
    <button @click="$emit('onItemDelete', item)">X</button>
  </div>
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
  display: flex;
  justify-content: flex-end;
  word-break: break-all;
  max-width: 100px;
  max-height: 30px;
  flex: 0 1;
  border-radius: 0.1vw 0.5vw;
  box-shadow: 0px 3px 2vw red;
}
.marginpading {
  margin: 2%;
  padding: 1.2% 2%;
}
.unselected {
  background: red;
  box-shadow: 0px 3px 2vw red;
}
.isSelected {
  background: green;
  text-decoration: line-through;
  box-shadow: 0px 3px 2vw green;
}
button {
  margin: 2%;
  border: none;
  color: white;
  background: black;
  font-size: 11%;
  padding: 12.5%;
}
</style>
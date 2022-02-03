<template>
  <span>
    <TodoCard
      v-for="(val, key) of listTodo"
      :key="key"
      :item="val"
      @onItemDelete="$emit('onRemoveItem', {key,val})"
      @onItemSelected="$emit('onProgressStateChanged', val)"
    />
  </span>
</template>
<script>
import TodoCard from "./TodoCard.vue";
export default {
  components: { TodoCard },
  props: {
    listTodo: Array,
  },
};
</script>
<style scoped>
span {
  margin: 2.7vw 0;
}
</style>
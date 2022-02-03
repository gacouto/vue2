<template>
  <span>
    <TodoCard
      v-for="(val, key) in listTodo"
      :key="key"
      :item="val"
      :isSelected="val.done"
      @onItemDelete="$emit('onRemoveItem', {key,val})"
      @onItemSelected="$emit('onDoneTodo', val)"
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
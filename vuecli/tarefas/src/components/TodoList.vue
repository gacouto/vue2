<template>
  <div>
    <TodoCard
      v-for="(val, key) in listTodo"
      :key="key"
      :item="val"
      :isSelected="val.done"
      @onItemDelete="$emit('onRemoveItem', {key,val})"
      @onItemSelected="$emit('onDoneTodo', val)"
    />
  </div>
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
div{
    display: grid; 
    grid-template-rows:repeat(auto-fit,50px);
} 
</style>
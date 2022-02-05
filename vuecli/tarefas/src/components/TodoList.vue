<template>
  <div class="gridcontainer">
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
.gridcontainer{
    min-width: 320px;
    display: grid; 
    grid-template-columns:repeat(auto-fill,minmax(120px,4fr));
} 
</style>
<template>
    <span>
        <TodoCard v-for="(val,key) of listTodo" 
        :key="key" :item="key" :containedValue="val" />
    </span>
</template>
<script>
import TodoCard from './TodoCard.vue'
export default {
  components: { TodoCard },
    props:{
        listTodo:Object
    },
    mounted(){
        this.$on("onItemSelected", function(item) {
		debugger;
		 //Vue.set(this.selectedList, item, "")
		});
    }
}
</script>
<style scoped>
span{
    margin: 0.7vw 0;
}
</style>
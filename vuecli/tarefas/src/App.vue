<template>
  <div id="app">
    <h1>Tarefas</h1>
    <TodoInput @onItemNameAdded="addItemName" />
    <TodoList :listTodo="allowedList" />
    {{ progresso }}
  </div>
</template>

<script>

import Vue from "vue";

import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
export default {
  components: { TodoInput, TodoList },
  data() {
    return {
      allowedList: { john: "", joao: "" },
      lastIndex: 1,
      selectedList: {},
    };
  },
  methods: {
    addItemName(itemName) {
      Vue.set(this.allowedList, `${itemName}`, "");
      //			this.allowedList[`${itemName}`] = ''
    },
  },
  computed: {
    allowedList2() {
      return { john: 0, joao: 1 };
    },
    progresso() {
      let numberOfTodos = Object.keys(this.allowedList).length;
	  let numberOfDoneTodos = Object.keys(this.selectedList).length;
	  let progress = 100 *  numberOfDoneTodos / numberOfTodos
      
	  return progress
    },
  },
  mounted() {
    this.$on("onItemSelected", function(item) {
		debugger;
		 Vue.set(this.selectedList, item, "")
		});
  },
  beforeDestroy() {
    this.$off("onItemSelected");
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>

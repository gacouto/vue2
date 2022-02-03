<template>
  <div id="app">
    <h1>Tarefas</h1>
    <Progress-bar :progress="progresso" />

    <TodoInput @onItemNameAdded="addItemName" />

    <TodoList :listTodo="allowedList" 
      @onRemoveItem="deleteItem"
      @onProgressStateChanged="selectItem" />
    
  </div>
</template>

<script>
import ProgressBar from "./components/ProgressBar.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";

const LS_LISTNAME = "allowedList";
const LS_SELECTED_LISTNAME = "selectedList";
export default {
  components: { TodoInput, TodoList, ProgressBar },
  data() {
    return {
      allowedList: [],
      lastIndex: 1,
      selectedList: [],
    };
  },
  methods: {
    addIfNotExists(list, itemName, functionCallback) {
      let foundIndex = list.indexOf(`${itemName}`);
      let notExistOnList = foundIndex === -1;
      if (notExistOnList) {
        list.push(itemName);
      } else {
        functionCallback(list, itemName, foundIndex);
      }
    },
    removeIfAlreadyExists(list, item, foundIndex) {
      list.splice(foundIndex, 1);
    },
    addItemName(itemName) {
      this.addIfNotExists(this.allowedList, itemName,()=>{});
    },
    selectItem(itemName) {
      this.addIfNotExists(
        this.selectedList,itemName,
        this.removeIfAlreadyExists
      );
    },
    deleteItem({key,val}){
      this.allowedList.splice(key,1)
      if(this.selectedList.length>0){
        debugger
        let indexItemSelected = this.selectedList.findIndex(indx=>indx==val)
        this.selectedList.splice(indexItemSelected,1)        
      }
    },
    oldAddItemName(itemName) {
      let isAlreadyOnList = false;
      for (let ii = 0; ii < this.allowedList.length; ii++) {
        let todoItem = this.allowedList[ii];
        if (todoItem === itemName) {
          isAlreadyOnList = true;
          break;
        }
      }
      if (!isAlreadyOnList) {
        this.allowedList.push(itemName);
      }
    },
  },
  computed: {
    progresso() {
      let numberOfTodos = this.allowedList.length;
      let numberOfDoneTodos = this.selectedList.length;
      let progress = (100 * numberOfDoneTodos) / numberOfTodos;
      //debugger
      if(progress>0){ progress = Math.round(progress)}
      else{ progress=0}
      return progress;
    },
  },
  watch: {
    allowedList() {
      localStorage.setItem(LS_LISTNAME, JSON.stringify(this.allowedList));
    },
    selectedList() {
      let stringList =
        JSON.stringify(this.selectedList) 

      localStorage.setItem(
        LS_SELECTED_LISTNAME,stringList
      );
    },
  },
  mounted() {
    let allTodos = JSON.parse(localStorage.getItem(LS_LISTNAME));
    let doneTodos = JSON.parse(localStorage.getItem(LS_SELECTED_LISTNAME));
    
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

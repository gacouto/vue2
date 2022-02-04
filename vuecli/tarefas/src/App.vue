<template>
  <div id="app">
    <h1>Tarefas</h1>
    <Progress-bar :progress="progresso" class="glow-shadow" />

    <TodoInput @onItemNameAdded="addItemName" />

    <TodoList :listTodo="allowedList" 
      @onRemoveItem="key=>allowedList.splice(key,1)"
      @onDoneTodo="markTodoAsDone" />
    
  </div>
</template>

<script>
import ProgressBar from "./components/ProgressBar.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";

const LS_LISTNAME = "allowedList";
export default {
  components: { TodoInput, TodoList, ProgressBar },
  data() {
    return {
      allowedList: []
    };
  },
  methods: {
    addIfNotExists(list, itemName) {
      
      let foundIndex = list ? list.findIndex(obj=>obj.name==`${itemName}`) : -1;
      let notExistOnList = foundIndex === -1;
      if (notExistOnList) {
        let preparedItemObj = { name:itemName,done:false}
        list.push(preparedItemObj);
      }  
    },
    removeIfAlreadyExists(list, item, foundIndex) {
      list.splice(foundIndex, 1);
    },
    addItemName(itemName) {
      this.addIfNotExists(this.allowedList, itemName);
    },
    markTodoAsDone(itemObject){
      itemObject.done=!itemObject.done
      localStorage.setItem(LS_LISTNAME, JSON.stringify(this.allowedList));
    }
  },
  computed: {
    progresso() {      
      let numberOfTodos = this.allowedList? this.allowedList.length : 0;      
      let numberOfDoneTodos = 0      
      if(numberOfTodos===0) return 0

      for(const todo of this.allowedList){
        if(todo.done){
          numberOfDoneTodos++
        }
      }
      let progress = (100 * numberOfDoneTodos) / numberOfTodos; 
      if(progress>0){ progress = Math.round(progress)}
      else{ progress=0}

      return progress;
    },
  },
  watch: {
    allowedList() {
      localStorage.setItem(LS_LISTNAME, JSON.stringify(this.allowedList));
      
    }
  },
  mounted() {
    let allTodos = JSON.parse(localStorage.getItem(LS_LISTNAME));
    
    if(allTodos==null) allTodos = []

    this.allowedList = allTodos
    
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
.rounded-border{
  border-radius: 0 12px;
}
.glow-shadow{  
  box-shadow: 0px 3px 2vw green;
}
</style>

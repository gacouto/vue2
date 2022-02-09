<template>
  <div class="question" v-if="current">
    <p>{{current.text}}</p>
    <ul class="answers">
      <li v-for="(answer, indx) of current.answers"
       :key="indx" @click="$emit('markAnswer',answer.correct)">
        <span class="number">{{ indx }}</span>
        <span class="text">{{answer.text}}</span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
      current:Object
  }
};
</script>

<style>
.question {
  height: 400px;
  color: #000;
  background-color: #fff;
  width: 70%;
  border-radius: 20px;
  font-size: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

ul.answers {
  font-size: 2rem;
  padding: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.answers li {
  margin: 20px;
  background-color: #89c454;
  border-radius: 8px;
  width: 40%;

  display: flex;
}

.answers .number {
  padding: 10px;
  background-color: #1e9c31;
  color: #fff;
  flex-basis: 30px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.answers .text {
  flex: 1;
  align-self: center;
}
</style>

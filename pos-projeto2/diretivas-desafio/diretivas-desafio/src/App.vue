<template>
  <div id="app">
    <h1>Diretivas (Desafio)</h1>
    <hr />
    <!-- Exercício -->
    <!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
    <button v-event-changer:followyou>change</button>
  </div>
</template>

<script>
export default {
  directives: {
    "event-changer": {
      bind(el, binding) {
        if (binding.arg === "followyou") {
          let isButtonAttached = el.dataset.active;
          if (isButtonAttached === undefined) {
            isButtonAttached = false;
          }
          //debugger
          let moveElement = function (windowevent) {
            let xPercent = (windowevent.x / window.innerWidth).toFixed(2);
            let yPercent = (windowevent.y / window.innerHeight).toFixed(2);



            const { style } = el;
            console.log(`position is ${style.position}\n
              x ${xPercent}, y ${yPercent} `)
            //eh como se fosse let position = new String()
            style.position = "fixed";
            style.top = `${yPercent * 100 - 5}%`;
            style.left = `${xPercent * 100 - 5}%`;
          };

          el.addEventListener("click", function () {
            if (isButtonAttached) {
              isButtonAttached = false;
              window.removeEventListener("mousemove", moveElement);
            } else {
              isButtonAttached = true;
              window.addEventListener("mousemove", moveElement);
              window.addEventListener("touchmove", moveElement);
            }
          });
        }
      },
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}

button {
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}
</style>

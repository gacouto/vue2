<template>
  <div id="app">
    <span :is="displayedComponent"></span>
    <span class="clicavel" @click="changeDisplayedComponent">clk</span>
    <Citacoes @onChangedIndex="mudarCitacaoSelecionada" />
    <Citacao :quote="selectedQuote" />
    <Sobre />
    <keep-alive>

    <component :is="displayedComponent"  ></component>
    </keep-alive>
  </div>
</template>

<script>
import Citacao from "./components/Citacao";
import Citacoes from "./components/Citacoes";
import Sobre from "./components/Sobre";

export default {
  components: { Citacao, Citacoes, Sobre },
  data() {
    return {
      selectedQuote: null,
      displayedComponent: "",
    };
  },
  methods: {
    mudarCitacaoSelecionada(citacao) { 
      this.selectedQuote = citacao;
    },
    changeDisplayedComponent() { 
      this.displayedComponent =
        this.displayedComponent != "Sobre" ? "Sobre" : "Citacao";
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.6rem;
}

button {
  outline: none;
  padding: 5px 15px 10px;
  margin: 10px 5px;
  border-radius: 3px;
  font-size: 2rem;
  font-weight: 300;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
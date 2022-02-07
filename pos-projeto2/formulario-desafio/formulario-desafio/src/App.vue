<template>
  <div id="app">
    <h1>Formulário Desafio</h1>
    <div class="conteudo">
      <form class="painel" v-if="!isSended">
        <div class="cabecalho">Formulário</div>
        <!-- Exercicio 01 -->
        <!-- Criar uma formulário de registro -->
        <!-- Nome completo (Nome e Sobrenome) -->
        <!-- Email -->
        <!-- Senha -->
        <!-- Armazenar Dados? (Sim/Não) -->

        <!-- Exercicio 02 -->
        <!-- Só mostrar o fomulário de não tiver sido submetido -->
        <!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->

        <Rotulo :nome="'nome completo'">
          <NomeCompleto v-model="fullname" />
        </Rotulo>
        <Rotulo :nome="'email'">
          <input type="email" name="email" v-model="user.email" />
        </Rotulo>

        <Rotulo :nome="'senha'">
          <input type="password" name="passwor" v-model.lazy="user.password" />
        </Rotulo>
        <Rotulo :nome="'escolha seu anime'">
          <select v-model="user.animeFavorito">
            <option v-for="anime of user.animes" :key="anime" :value="anime">
              {{ anime }}
            </option>
          </select>
        </Rotulo>
        <span>
           <input type="radio"
            value="textaos"   
            v-model="user.comidaFavorita"/>comidas
          <input type="radio"
            value="textao"   
            v-model="user.comidaFavorita"/>comidas
        </span>

        <!-- <Rotulo :nome="'nada'">
          <div>
            <div v-for="(comida,indx) of comidas" :key="indx">
              <input type="checkbox" 
              v-model="user.comidaFavorita"
               :value="comida"  />
              {{ comida }}
            </div>
          </div>
        </Rotulo> -->

        <Rotulo :nome="'armazenar?'">
          <div>
            <input
              type="radio"
              name="storeData"
              :value="true"
              v-model="user.shouldStore"
            />Sim
            <input
              type="radio"
              name="storeData"
              :value="false"
              v-model="user.shouldStore"
            />Não
          </div>
        </Rotulo>

        <ToggleBtn v-model="user.shouldStore" />
        <!-- Exercicio 03 -->
        <!-- Crie um componente personalizado NomeCompleto -->
        <!-- Esse componente deve receber Nome e Sobrenome -->
        <button @click.prevent="isSended = !isSended">Enviar</button>
      </form>
      <div class="painel" v-else>
        <div class="cabecalho">Resultado</div>
        <div>
          Nome:<span>{{ fullname.name }}</span>
        </div>
        <div>
          Sobrenome:<span>{{ fullname.middlename }}</span>
        </div>
        <div>
          Email:<span>{{ user.email }}</span>
        </div>
        <Rotulo :nome="'Armazenar dados'">
          {{ user.shouldStore }}
        </Rotulo>
        <Rotulo :name="'anime favorito'">
          {{ user.animeFavorito }}
        </Rotulo>
      </div>
    </div>
  </div>
</template>

<script>
import NomeCompleto from "./components/NomeCompleto.vue";
import Rotulo from "./components/Rotulo.vue";
import ToggleBtn from "./components/ToggleBtn.vue";

export default {
  name: "app",
  components: { Rotulo, NomeCompleto, ToggleBtn },
  data() {
    return {
      isSended: false,
      comidas: ["pizza", "hamburguer", ""],
      fullname: {
        name: "",
        middlename: "",
      },
      user: {
        email: "",
        password: "",
        shouldStore: false,
        animeFavorito: "",
        comidaFavorita: '',
        animes: [
          "shingeki no miojin",
          "kimetsu",
          "mushoku tensei",
          "black clover",
          "naruto",
        ],
      },
    };
  },
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>

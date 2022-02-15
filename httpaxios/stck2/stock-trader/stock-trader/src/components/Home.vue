<template>
  <div>
    <h1>Negocie e consult suas açoes</h1>
    <v-alert :value="true" color="info" icon="info" outline>
      Você pode salvar e carregar dados
    </v-alert>
    <BarTeste>
      <template slot-scope="props">
        <strong >beibe {{ props }} beibe</strong>
      </template>
    </BarTeste>
    <v-alert :value="true" color="success" icon="check_circle" outline>
      Clique em finalizar dia para flutuar os preços
    </v-alert>
    <h2>Seu saldo é {{ getTodaysBalanceFormatted }}</h2>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import BarTeste from "./BarTeste.vue";
export default {
  components: { BarTeste },

  computed: {
    ...mapGetters(["getTodaysBalanceFormatted"]),
  },
};
</script>
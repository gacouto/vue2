<template>
  <Painel titulo="Lista de quem vai pagar" roxo>
    <div>
        <h6>{{ allPayers || "Ninguem" }}</h6>
      <div class="linha addinput ">
        <p>Adicionar a lista: </p>
        <input type="text" class="addinput"
         @keyup.enter="addPayer($event.target.value)" />
      </div> 
       
    </div>
  </Painel>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("payers", ["allPayers"]),
  },
  methods: {
    ...mapActions("payers", ["addPayer"]),
  },
};
</script>

<style>
.d-inline{
    display: inline;
}
.addinput{
        font-size: 22px;
        width: 50%;
        height: 50px;
}
table {
  width: 100%;
}
td {
  border-top: 1px solid #eee;
  width: 33%;
}

</style>

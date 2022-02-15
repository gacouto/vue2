<template> 
     <v-menu offset-y>
        <template slot="activator" slot-scope="{ on }">
          <v-btn flat color="primary" dark v-on="on"> Salvar/Carregar </v-btn>
        </template>
        <v-list>
          <v-list-tile>
          <v-btn flat color="primary" dark @click="saveAllOnDb" > Salvar </v-btn>
            
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title @click="loadAllFromDb">Carregar dados</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu> 
</template>
<script>
import { mapActions } from 'vuex'
export default {
    methods:{
        ...mapActions(["loadAllFromDb","saveAllOnDb"]),
         
    }
}
</script>
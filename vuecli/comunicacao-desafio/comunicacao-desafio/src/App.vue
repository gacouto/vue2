<template>
	<div id="app">
		<usuario-lista :usuarios="usuarios"  />
		<usuario-detalhe v-bind:selectedUser="sUser"/>
	</div>
</template>

<script>
import UsuarioLista from './components/UsuarioLista.vue'
import UsuarioDetalhe from './components/UsuarioDetalhe.vue'
import bus from '@/barramento'

export default {
	name: "app",
	components: { UsuarioLista, UsuarioDetalhe },
    data() {
        return { 
			sUser:null
        }
    },
	methods:{
		userSelected(user){
			// eslint-disable-next-line
			//debugger
			if(user!=this.sUser)
				return this.sUser=user
			this.sUser = null
		}
	},
	created(){
		bus.$on('onUserSelected',this.userSelected)
	}
}
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;

	display: flex;
	font-size: 2rem;
}

#app div {
	margin: 20px;
}
</style>

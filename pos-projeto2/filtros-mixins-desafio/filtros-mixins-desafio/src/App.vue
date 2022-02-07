<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p>{{'muito espaco aqui' | noSpaces }}</p>
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<p>{{'ir a feira' | sizeOfWords }}</p>
		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<p>'muito espaco aqui'</p>
		<p>{{noSpacesComputed('muito espaco aqui') }}</p>
		<p>{{noSpacesComputedM('muito espaco aqui') }}</p>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
		<p>{{sizeOfWordsM('a casa do pedro')}}</p>
	</div>
</template>

<script>
import wordsMixin from '@/wordsMixin'
export default {
	mixins:[wordsMixin],
	filters:{
		noSpaces(val){
			return val.replaceAll(' ',',')
		}
	},
	computed:{
		noSpacesComputed(){
			return val => val.replaceAll(' ',',')
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>

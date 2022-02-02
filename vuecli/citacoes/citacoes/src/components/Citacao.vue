<template>
    <div class="citacao" v-if="citacao">
        <p>{{citacao.texto}}</p>
        <small>{{citacao.fonte}}</small>
    </div>
</template>

<script>
export default {
    props:{
        citacao:Object
    }
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
</style>

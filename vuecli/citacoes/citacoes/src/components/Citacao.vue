<template>
    <div class="citacao" v-if="quote">
        <p>{{quote.texto}}</p>
        <small>{{quote.fonte}}</small>
    </div>
</template>

<script>
export default {
    props:{
        quote:Object
    },
    created(){
        console.log('criei')
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

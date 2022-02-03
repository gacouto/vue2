<template>
    <div>
        <input type="text" v-model="itemName" class="glow-shadow rounded-border">
        <button class="rounded-border" 
        @click="$emit('onItemNameAdded',itemName)">+
        </button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            itemName:''
    }}
}
</script>
<style scoped>
input{
    margin: 1vw;
}
button{
    outline: none;
    background: black;
    color: white;
    box-shadow: 0px 1px 2vw black;
}
</style>
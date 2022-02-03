<template>
    <div>
        <input type="text" v-model="itemName">
        <button class="plus" @click="$emit('onItemNameAdded',itemName)">+</button>
    </div>
</template>
<script>
export default {
    data(){return{
        itemName:''
    }}
}
</script>
<style scoped>

</style>
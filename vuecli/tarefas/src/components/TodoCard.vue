<template>
    <span :class="selectedStyle" class="card" 
    @click="$emit('onItemSelected',item)"
     >{{item}} </span>
</template>
<script>
export default {
    props:{
        isSelected:Boolean,
        item:String,
        containedValue:String
    },
    computed:{
        selectedStyle(){
            return this.isSelected ? 'selected':'unselected'
        }
    },
    mounted(){
        
        console.log(this.item)
    }
}
</script>
<style scoped>
 .card{
        margin:0.4vw;
 }
 .unselected{
     background: red;
 }
 .selected{
     background: red;
 }
</style>
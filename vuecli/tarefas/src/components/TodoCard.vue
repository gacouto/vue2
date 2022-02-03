<template>
<span>
    <button @click="$emit('onItemDelete',item)">X</button>
    <span :class="selectedStyle" class="card" 
    @click="selectThisItem" >{{item}} 
    </span>
</span>
</template>
<script>
export default {
    props:{
        item:String
    },
    data(){
        return {
            isSelected:false,
        }
    },
    methods:{
        selectThisItem(item){
            this.isSelected=!this.isSelected
            this.$emit('onItemSelected',item)            
        } 
    },
    computed:{
        selectedStyle(){
            return this.isSelected ? 'selected' : 'unselected'
        }
    } 
}
</script>
<style scoped>
 .card{
        margin:0.7vw;
        padding: 0.7vw;
        border-radius: 0.1vw 0.5vw;
 }
 .unselected{
     background: red;
 }
 .selected{
     background: green;
 }
 button{
     border:none;
     color:white;
     background: black;
     font-size: 1vw;
     padding: 0.5vw;
 }
</style>
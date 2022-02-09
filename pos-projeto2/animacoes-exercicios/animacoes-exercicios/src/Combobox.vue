<template>
    <select name="" id="" 
    @input="$emit('input',$event.target.value)">
        <option  v-for="animation of animations" 
        :key="animation" :value="animation">{{animation}}</option>
    </select>

</template>
<script>
export default {
  props:{
    value:String,
    animations:Array
  }

}
</script>
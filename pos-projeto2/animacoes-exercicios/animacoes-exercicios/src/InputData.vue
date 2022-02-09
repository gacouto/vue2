<template>
     <div>
        <input
          list="animationsListHtmlTag"
         @input="$emit('input',$event.target.value)"
          ref="datainputref"        />
        <datalist id="animationsListHtmlTag">
          <option
            v-for="animation of animations"
            :key="animation"
            :value="animation"     >
            {{ animation }}
          </option>
        </datalist>
      </div>

</template>
<script>
export default {
  props:{
    value:String,
    animations:Array
  }

}
</script>
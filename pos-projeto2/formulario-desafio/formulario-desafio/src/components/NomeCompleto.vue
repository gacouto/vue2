<template>
  <div>
    <input
      type="text"
      name="nome"
      @input="$emit('input', {
          name: $event.target.value,
          middlename: value.middlename
        })"   />
    <input
      type="text" name="sobrenome"  @input="
        $emit('input', {
          name: value.name,
          middlename: $event.target.value
        })"  />
  </div>
</template>
<script>
export default {
  props: {
    value: Object,
  },
};
</script>
<style scoped>
</style>
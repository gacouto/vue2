<template>
  <v-card-actions>
    <v-text-field
      label="Qtd"
      type="number"
      v-model.number="quantity"
    ></v-text-field>
    <v-btn color="blue"   @click="$emit('quantityChanged', quantity)">
      {{ buttonText }}
    </v-btn>
  </v-card-actions>
</template>
<script>
export default {
  props: {
    buttonText: String,
  },
  data() {
    return {
      quantity: 0,
    };
  },
};
</script>
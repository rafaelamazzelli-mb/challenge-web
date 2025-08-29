<script setup>
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  nameLabel: String,
  modelValue: String,
  typeInput: String,
})
</script>

<template>
  <label :name="nameLabel" />
  <input
    :type="typeInput"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped></style>

<template>
  <div class="container-input">
    <label :for="id" class="base-label"> {{ props.title }} </label>
    <input
      class="base-input"
      :value="modelValue"
      :id="id"
      :type="typeInput"
      @input="emit('update:modelValue', $event.target.value)"
      @blur="onValidate"
    />
    <span v-if="!isValid" class="error-message"> {{ props.errorMessage }} </span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
  },
  typeInput: {
    type: String,
  },
  title: {
    type: String,
  },
  validateInput: {
    type: Function,
  },
  errorMessage: {
    type: String,
  },
  id: {
    type: String,
  },
})

const emit = defineEmits(['update:modelValue', 'valid'])
const isValid = ref(true)

function onValidate(event) {
  const value = event.target.value
  if (props.validateInput) {
    isValid.value = props.validateInput(value)
  }
  emit('valid', isValid)
}
</script>

<style lang="scss">
@use './mbc-base-input.scss';
</style>

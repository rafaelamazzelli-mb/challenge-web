<template>
  <div class="container-input">
    <label :for="id" class="base-label">
      <input
        class="base-input"
        :type="typeInput"
        :value="modelValue"
        :id="id"
        @input="emit('update:modelValue', $event.target.value)"
        @blur="onValidate"
      />
      {{ props.title }}
    </label>
    <span v-if="!isValid" class="error-message"> {{ props.errorMessage }} </span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: {
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
  typeInput: {
    type: String,
  },
})

const emit = defineEmits(['update:modelValue', 'valid'])
const id = `${uniqueId()}-${props.title}`
const isValid = ref(true)

function onValidate(event) {
  const value = event.target.value
  isValid.value = props.validateInput(value)
  emit('valid', isValid)
}

function uniqueId() {
  return Math.floor(Math.random() * 1000)
}
</script>

<style lang="scss">
@use './styles.scss';
</style>

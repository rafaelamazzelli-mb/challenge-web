<template>
  <div class="container-input">
    <label :for="titleLabel" class="base-label">
      <input
        :id="titleLabel"
        :type="typeInput"
        :value="modelValue"
        class="base-input"
        @input="updateModelValue"
        @blur="showErrorMessage"
      />
      {{ props.titleLabel }}
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
  titleLabel: {
    type: String,
  },
  validation: {
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
const isValid = ref(true)

function updateModelValue(event) {
  const response = event.target.value

  emit('update:modelValue', response)
}

function showErrorMessage(event) {
  const response = event.target.value

  isValid.value = props.validation(response)
  emit('valid', isValid.value)
}
</script>

<style lang="scss">
@import url('./styles.scss');
</style>

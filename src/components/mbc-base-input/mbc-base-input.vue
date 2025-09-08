<template>
  <div class="container-input">
    <label class="base-label"> {{ nameLabel }} </label>
    <input
      class="base-input"
      :value="modelValue"
      @input="updateAndValidate"
      @blur="validation(modelValue)"
      v-bind="$attrs"
    />
    <span class="error-message-red" v-if="!isValid"> {{ errorMessage }} </span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import './styles.scss'

const props = defineProps(['nameLabel', 'modelValue', 'validation', 'errorMessage'])
const emit = defineEmits(['update:modelValue', 'valid'])
const isValid = ref(true)

function updateAndValidate(event) {
  const data = event.target.value
  emit('update:modelValue', data)

  isValid.value = props.validation(data)

  emit('valid', isValid.value)
}
</script>

<style lang="scss"></style>

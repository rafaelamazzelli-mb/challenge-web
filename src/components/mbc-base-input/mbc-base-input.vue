<script setup>
import './styles.scss'

const props = defineProps(['nameLabel', 'modelValue', 'validation'])
const emit = defineEmits(['update:modelValue'])

function onInput(event) {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <div class="container-input">
    <label class="base-label"> {{ nameLabel }} </label>
    <input
      class="base-input"
      :value="modelValue"
      v-bind="$attrs"
      @input="onInput"
      @change="validation(modelValue)"
    />
  </div>
</template>

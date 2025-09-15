<template>
  <label :for="id" class="label-person-type">
    <input
      class="input-person-type"
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      @change="emit('update:modelValue', value)"
    />
    {{ props.title }}
  </label>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
  },
  value: {
    type: String,
  },
  name: {
    type: String,
  },
  title: {
    type: String,
  },
})

const emit = defineEmits(['update:modelValue'])
const id = `${uniqueId()}-${props.title}`

function uniqueId() {
  return Math.floor(Math.random() * 1000)
}
</script>

<style lang="scss">
@use './styles.scss';
</style>

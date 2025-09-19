<template>
  <div class="container-radio">
    <input
      class="input-person-type"
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      @change="emit('update:modelValue', value)"
    />
    <label :for="id" class="label-person-type"> {{ props.title }} </label>
  </div>
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
  id: {
    type: String,
  },
})

const emit = defineEmits(['update:modelValue'])
</script>

<style lang="scss">
@use './mbc-base-radio-input.scss';
</style>

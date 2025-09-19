<template>
  <button class="button" :type="typeButton" :class="props.variant">{{ props.label }}</button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
  },
  variant: {
    type: String,
    validator(value) {
      return ['primary', 'secondary'].includes(value)
    },
  },
  typeButton: {
    type: String,
  },
})
</script>

<style lang="scss">
@use './mbc-base-button.scss';
</style>

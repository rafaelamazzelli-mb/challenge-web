<template>
  <button class="button" :class="props.variant">{{ props.label }}</button>
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
})
</script>

<style lang="scss">
@use './styles.scss';
</style>

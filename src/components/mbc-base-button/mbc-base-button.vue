<template>
  <div class="container-base-button">
    <button type="submit" :class="['base-button', variantType]">
      {{ buttonLabel }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  variantType: {
    type: String,
  },
  buttonLabel: {
    type: String,
  },
})
</script>

<style lang="scss">
@use './styles.scss';
</style>

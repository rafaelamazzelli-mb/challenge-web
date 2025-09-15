<template>
  <button :class="buttonVariantType">{{ props.label }}</button>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  type: {
    type: String,
  },
  label: {
    type: String,
  },
})

const enabled = ref(true)

const buttonVariantType = computed(() => {
  return {
    button: enabled,
    primary: props.label === 'Continuar' || 'Cadastrar' ? enabled : !enabled,
    secondary: props.label === 'Voltar' ? enabled : !enabled,
  }
})
</script>

<style lang="scss">
@use './styles.scss';
</style>

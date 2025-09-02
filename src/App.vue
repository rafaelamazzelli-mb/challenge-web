<script setup>
import MbcStepIndicator from './components/mbc-step-indicator/mbc-step-indicator.vue'
import MbcBaseInput from './components/mbc-base-input/mbc-base-input.vue'
import MbcBaseButton from './components/mbc-base-button/mbc-base-button.vue'
import MbcBaseCheckbox from './components/mbc-base-checkbox-options/mbc-base-checkbox.vue'
</script>

<template>
  <MbcStepIndicator current-step="1" total-steps="4" />
  <MbcBaseInput name-label="Endereço de e-mail" />
  <MbcBaseCheckbox type-person="Pessoa física" />
  <MbcBaseCheckbox type-person="Pessoa jurídica" />
  <MbcBaseButton variant="primary" type-button="Continuar" />
</template>

<style scoped></style>

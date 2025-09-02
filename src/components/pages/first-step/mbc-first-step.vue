<script setup>
import MbcBaseButton from '@/components/mbc-base-button/mbc-base-button.vue'
import MbcBaseCheckbox from '@/components/mbc-base-checkbox-options/mbc-base-checkbox.vue'
import MbcBaseInput from '@/components/mbc-base-input/mbc-base-input.vue'
import MbcStepIndicator from '@/components/mbc-step-indicator/mbc-step-indicator.vue'
import { validation } from '@/helpers/validation'
import { ref } from 'vue'

const responseFromBaseInput = ref('')
</script>

<template>
  <form>
    <MbcStepIndicator current-step="1" total-steps="4" />
    <h1>Seja bem vindo (a)</h1>
    <MbcBaseInput
      name-label="Endereço de e-mail"
      v-model="responseFromBaseInput"
      :validation="validation"
    />
    <MbcBaseCheckbox type-person="Pessoa física" />
    <MbcBaseCheckbox type-person="Pessoa jurídica" />
    <MbcBaseButton variant="primary" type-button="Continuar" type="submit" />
  </form>
</template>

<style scoped></style>

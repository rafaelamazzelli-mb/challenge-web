<template>
  <div class="first-step-container">
    <h1 class="welcome-title">Seja bem vindo(a)</h1>
    <mbc-base-input
      v-model="formData.email"
      title="Endereço de e-mail"
      id="input-welcome-email-address"
      type="text"
      error-message="Insira um e-mail válido"
      :validate-input="validateEmail"
    />
    <mbc-base-radio-input
      v-model="formData.typePerson"
      name="typePerson"
      id="input-pessoa-fisica"
      value="pessoa física"
      title="Pessoa física"
    />
    <mbc-base-radio-input
      v-model="formData.typePerson"
      name="typePerson"
      id="input-pessoa-juridica"
      value="pessoa jurídica"
      title="Pessoa jurídica"
    />
  </div>
</template>

<script setup>
import { validateEmail } from '@/helpers/email-helper'
import MbcBaseRadioInput from '@/components/mbc-base-radio-input/mbc-base-radio-input.vue'
import MbcBaseInput from '@/components/mbc-base-input/mbc-base-input.vue'

const props = defineProps({
  formData: {
    type: Object,
  },
})

const emit = defineEmits(['update:formData'])
</script>

<style lang="scss">
@use './mbc-welcome.scss';
</style>

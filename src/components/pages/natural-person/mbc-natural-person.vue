<template>
  <div v-if="formData.typePerson === 'pessoa-fisica'" class="second-step-container">
    <mbc-base-input
      v-model="formData.name"
      title="Nome"
      id="input-name-natural-person"
      maxlength="40"
      type-input="text"
      error-message="Insira um nome válido"
      :validate-input="(inputValue) => validateStringLength(inputValue, 4, 40)"
    />
    <mbc-base-input
      v-model="formData.identificationNumber"
      title="CPF"
      id="input-document-natural-person"
      maxlength="14"
      type-input="text"
      error-message="Insira um CPF válido"
      :validate-input="validateValidCpf"
      :mask="cpfMask"
    />
    <mbc-base-input
      v-model="formData.date"
      title="Data de nascimento"
      id="input-date-birth"
      maxlength="10"
      type-input="text"
      error-message="Insira uma data válida"
      :validate-input="validateMinimunAgeBrazil"
      :mask="dateMask"
    />
    <mbc-base-input
      v-model="formData.phoneNumber"
      title="Telefone"
      id="input-phone-number-natural-person"
      maxlength="14"
      type-input="text"
      error-message="Insira um número válido"
      :validate-input="validateBrazilianPhoneNumber"
      :mask="maskBrazilianPhoneNumber"
    />
  </div>
</template>

<script setup>
import { validateStringLength } from '@/helpers/string-helper'
import { validateValidCpf } from '@/helpers/cpf-helper'
import { validateBrazilianPhoneNumber } from '@/helpers/phone-number-helper'
import { validateMinimunAgeBrazil } from '@/helpers/date-helper'
import { cpfMask } from '@/helpers/input-mask-helper'
import { dateMask } from '@/helpers/input-mask-helper'
import { maskBrazilianPhoneNumber } from '@/helpers/input-mask-helper'
import MbcBaseInput from '@/components/mbc-base-input/mbc-base-input.vue'

const props = defineProps({
  formData: {
    type: Object,
  },
})

const emit = defineEmits(['update:formData'])
</script>

<style lang="scss">
@use './mbc-natural-person.scss';
</style>

<template>
  <div v-if="localData.typePerson === 'pessoa jurídica'" class="second-step-container">
    <h1 class="type-person-title">Pessoa Jurídica</h1>
    <mbc-base-input
      v-model="localData.name"
      title="Razão social"
      id="input-name-legal-entity"
      maxlength="40"
      type-input="text"
      error-message="Insira um nome válido"
      :validate-input="(inputValue) => validateStringLength(inputValue, 4, 40)"
    />
    <mbc-base-input
      v-model="localData.number"
      title="CNPJ"
      id="input-document-legal-entity"
      maxlength="17"
      type-input="text"
      error-message="Insira um CNPJ válido"
      :validate-input="validateValidCnpj"
      :mask="cnpjMask"
    />
    <mbc-base-input
      v-model="localData.date"
      title="Data de abertura"
      id="input-open-date"
      maxlength="10"
      type-input="text"
      error-message="Insira uma data válida"
      :validate-input="validateMinimunAgeBrazil"
      :mask="dateMask"
    />
    <mbc-base-input
      v-model="localData.phoneNumber"
      title="Telefone"
      id="input-phone-number-"
      maxlength="14"
      type-input="text"
      error-message="Insira um número válido"
      :validate-input="validateBrazilianPhoneNumber"
      :mask="maskBrazilianPhoneNumber"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { validateStringLength } from '@/helpers/string-helper'
import { validateBrazilianPhoneNumber } from '@/helpers/phone-number-helper'
import { validateValidCnpj } from '@/helpers/cnpj-helper'
import { validateMinimunAgeBrazil } from '@/helpers/date-helper'
import { cnpjMask } from '@/helpers/input-mask-helper'
import { dateMask } from '@/helpers/input-mask-helper'
import { maskBrazilianPhoneNumber } from '@/helpers/input-mask-helper'
import MbcBaseInput from '@/components/mbc-base-input/mbc-base-input.vue'

const props = defineProps({
  formData: {
    type: Object,
  },
})

const emit = defineEmits(['update:formData'])
const localData = computed({
  get: () => props.formData,
  set: (value) => emit('update:formData', value),
})
</script>

<style lang="scss">
@use './mbc-legal-entity.scss';
</style>

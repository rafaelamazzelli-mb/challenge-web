<template>
  <div class="second-step-container">
    <h1 class="type-person-title">
      {{ localData.typePerson === 'pessoa física' ? 'Pessoa física' : 'Pessoa jurídica' }}
    </h1>
    <mbc-base-input
      v-model="localData.name"
      :title="localData.typePerson === 'pessoa física' ? 'Nome' : 'Razão social'"
      id="input-name-legal-person"
      type-input="text"
      error-message="Insira um nome válido"
      :validate-input="(inputValue) => validateStringLength(inputValue, 4, 40)"
      @valid="isValueValid = $event"
    />
    <mbc-base-input
      v-model="localData.number"
      :title="localData.typePerson === 'pessoa física' ? 'CPF' : 'CNPJ'"
      id="input-document-number-legal-person"
      type-input="text"
      :error-message="
        localData.typePerson === 'pessoa física' ? 'Insira um CPF válido' : 'Insira um CNPJ válido'
      "
      :validate-input="
        localData.typePerson === 'pessoa física' ? validateValidCpf : validateValidCnpj
      "
      @valid="isValueValid = $event"
    />
    <mbc-base-input
      v-model="localData.date"
      :title="localData.typePerson === 'pessoa física' ? 'Data de nascimento' : 'Data de abertura'"
      id="input-date-birth-open"
      type-input="text-date"
      error-message="Insira uma data válida"
      :validate-input="validateLegalAge"
      @valid="isValueValid = $event"
    />
    <mbc-base-input
      v-model="localData.phoneNumber"
      title="Telefone"
      id="input-phone-number"
      type-input="number"
      error-message="Insira um número válido"
      :validate-input="validatePhoneNumber"
      @valid="isValueValid = $event"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { validateStringLength } from '@/helpers/string-helper'
import { validateValidCpf } from '@/helpers/cpf-helper'
import { validatePhoneNumber } from '@/helpers/phone-number-helper'
import { validateValidCnpj } from '@/helpers/cnpj-helper'
import { validateLegalAge } from '@/helpers/date-helper'
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
@use './mbc-natural-legal-person.scss';
</style>

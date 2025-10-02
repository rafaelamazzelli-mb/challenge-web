<template>
  <div class="fourth-step-container">
    <h1 class="review-info-title">Revise as suas informações</h1>
    <mbc-base-input
      v-model="formData.email"
      title="Endereço de e-mail"
      id="input-email-address"
      type-input="text"
    />
    <mbc-base-input
      v-model="formData.name"
      :title="changeTitle()"
      id="input-name"
      type-input="text"
    />
    <mbc-base-input
      v-model="formData.number"
      :title="changeCnpjOrCpf()"
      id="input-document-number"
      type-input="text"
    />
    <mbc-base-input
      v-model="formData.date"
      :title="changeDate()"
      id="input-date"
      type-input="text"
    />
    <mbc-base-input
      v-model="formData.phoneNumber"
      title="Telefone"
      id="input-phone-number-review"
      type-input="text"
    />
    <mbc-base-input
      v-model="formData.password"
      title="Sua senha"
      id="input-password"
      type-input="password"
    />
  </div>
</template>

<script setup>
import MbcBaseInput from '@/components/mbc-base-input/mbc-base-input.vue'

const props = defineProps({
  formData: {
    type: Object,
  },
})

const emit = defineEmits(['update:formData'])

function changeTitle() {
  return localData.typePerson === 'pessoa física' ? 'Nome' : 'Razão social'
}

function changeCnpjOrCpf() {
  return localData.typePerson === 'pessoa física' ? 'CPF' : 'CNPJ'
}

function changeDate() {
  return localData.typePerson === 'pessoa física' ? 'Data de nascimento' : 'Data de abertura'
}
</script>

<style lang="scss">
@use './mbc-review-information.scss';
</style>

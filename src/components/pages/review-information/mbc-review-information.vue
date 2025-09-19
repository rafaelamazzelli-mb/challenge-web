<template>
  <div class="fourth-step-container">
    <h1 class="review-info-title">Revise as suas informações</h1>
    <mbc-base-input
      v-model="localData.email"
      title="Endereço de e-mail"
      id="input-email-address"
      type-input="text"
    />
    <mbc-base-input
      v-model="localData.name"
      :title="localData.typePerson === 'pessoa física' ? 'Nome' : 'Razão social'"
      id="input-name"
      type-input="text"
    />
    <mbc-base-input
      v-model="localData.number"
      :title="localData.typePerson === 'pessoa física' ? 'CPF' : 'CNPJ'"
      id="input-document-number"
      type-input="text"
    />
    <mbc-base-input
      v-model="localData.date"
      :title="localData.typePerson === 'pessoa física' ? 'Data de nascimento' : 'Data de abertura'"
      id="input-date"
      type-input="text"
    />
    <mbc-base-input
      v-model="localData.phoneNumber"
      title="Telefone"
      id="input-phone-number-review"
      type-input="number"
    />
    <mbc-base-input
      v-model="localData.password"
      title="Sua senha"
      id="input-password"
      type-input="password"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
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
@use './mbc-review-information.scss';
</style>

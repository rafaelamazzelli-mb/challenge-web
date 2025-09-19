<template>
  <div class="second-step-container">
    <h3 class="step-title">Etapa <span class="orange-number">2</span> de 4</h3>
    <h1 class="type-person-title">Pessoa física</h1>
    <mbc-base-input
      v-model="responseFromBaseInput.name"
      title-label="Nome"
      type-input="text"
      error-message="Insira um nome que contenha no mínimo 4 caracteres ou no máximo 40 caracteres"
      :validation="validationForName"
      @valid="isValueValid = $event"
    />
    <mbc-base-input
      v-model="responseFromBaseInput.cpf"
      title-label="CPF"
      type-input="text"
      error-message="Insira um CPF válido!"
    />
    <mbc-base-input
      v-model="responseFromBaseInput.dateBirth"
      title-label="Data de nascimento"
      type-input="text"
      error-message="Insira uma data válida!"
      :validation="validateDate"
      @valid="isValueValid = $event"
    />
    <mbc-base-input
      v-model="responseFromBaseInput.telephone"
      title-label="Telefone"
      type-input="number"
      error-message="Insira um número de telefone válido!"
    />
    <mbc-base-button variant-type="secondary" button-label="Voltar" />
    <mbc-base-button variant-type="primary" button-label="Continuar" />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { validateDate, validateName } from '@/helpers/validators'
import MbcBaseInput from '@/components/mbc-base-input/mbc-base-input.vue'
import MbcBaseButton from '@/components/mbc-base-button/mbc-base-button.vue'

const isValueValid = ref(false)
const validationForName = validateName(4, 40)
const responseFromBaseInput = reactive({
  name: '',
  cpf: '',
  dateBirth: '',
  telephone: '',
})
</script>

<style lang="scss">
@import './styles.scss';
</style>

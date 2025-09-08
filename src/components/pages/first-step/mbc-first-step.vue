<template>
  <div class="first-step-container">
    <h3 class="step-title">Etapa <span class="orange-number">1</span> de 4</h3>
    <h1 class="welcome-title">Seja bem vindo(a)</h1>
    <mbc-base-input
      v-model="responseFromBaseInput"
      title-label="Endereço de e-mail"
      type-input="text"
      error-message="Insira um e-mail válido!"
      :validation="validateEmail"
      @valid="isEmailValid = $event"
    />
    <mbc-base-radio-input
      v-model="typeOfPersonSelected"
      value-selected-input="pessoa física"
      person-type="Pessoa física"
      name-attribute-value="typeOfPersonSelected"
    />
    <mbc-base-radio-input
      v-model="typeOfPersonSelected"
      value-selected-input="pessoa jurídica"
      person-type="Pessoa jurídica"
      name-attribute-value="typeOfPersonSelected"
    />
    <mbc-base-button
      @click="preventGoingNextPage"
      variant-type="primary"
      button-label="Continuar"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { validateEmail } from '@/helpers/validators'
import MbcBaseButton from '@/components/mbc-base-button/mbc-base-button.vue'
import MbcBaseRadioInput from '@/components/mbc-base-radio-input/mbc-base-radio-input.vue'
import MbcBaseInput from '@/components/mbc-base-input/mbc-base-input.vue'

const typeOfPersonSelected = ref('')
const responseFromBaseInput = ref('')
const isEmailValid = ref(false)

function preventGoingNextPage(event) {
  if (!responseFromBaseInput.value || !typeOfPersonSelected.value || !isEmailValid.value) {
    event.preventDefault()
  }
}
</script>

<style lang="scss">
@import url('./styles.scss');
</style>

<template>
  <form class="form-container">
    <div class="first-step-container">
      <mbc-step-indicator current-step="1" total-steps="4" />
      <h1 class="welcome-title">Seja bem vindo(a)</h1>
      <mbc-base-input
        name-label="Endereço de e-mail"
        v-model="responseFromBaseInput"
        :validation="validationForInputEmail"
        @valid="isEmailValid = $event"
        error-message="E-mail inválido! Insira novamente."
      />
      <mbc-base-checkbox person-type="Pessoa física" />
      <mbc-base-checkbox person-type="Pessoa jurídica" />
      <mbc-base-button variant="primary" button-role="Continuar" type="submit" />
    </div>
  </form>
</template>

<script setup>
import { validationForInputEmail } from '@/helpers/form-validators'
import { ref } from 'vue'
import MbcBaseButton from '@/components/mbc-base-button/mbc-base-button.vue'
import MbcBaseCheckbox from '@/components/mbc-base-checkbox-options/mbc-base-checkbox.vue'
import MbcBaseInput from '@/components/mbc-base-input/mbc-base-input.vue'
import MbcStepIndicator from '@/components/mbc-step-indicator/mbc-step-indicator.vue'
import './styles.scss'

const responseFromBaseInput = ref('')
const isEmailValid = ref(false)
</script>

<style lang="scss"></style>

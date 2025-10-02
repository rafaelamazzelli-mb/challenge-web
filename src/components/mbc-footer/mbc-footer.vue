<template>
  <div class="step-button">
    <mbc-base-button
      v-if="props.currentStep !== 'welcome'"
      variant="secondary"
      type-button="button"
      label="Voltar"
      @click="goPrevStep"
    />
    <mbc-base-button
      v-if="props.currentStep === 'review'"
      variant="primary"
      type-button="submit"
      label="Cadastrar"
    />
    <mbc-base-button
      v-if="props.currentStep !== 'review'"
      variant="primary"
      type-button="button"
      label="Continuar"
      :disabled="isDisable"
      @click="goToStep"
    />
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'
import MbcBaseButton from '../mbc-base-button/mbc-base-button.vue'

const props = defineProps({
  currentStep: String,
  typePerson: String,
  isDisable: {
    type: Boolean,
  },
})

const emit = defineEmits(['update:currentStep'])
const steps = {
  welcome: {
    handlers: {
      next: () => emit('update:currentStep', 'naturalPerson'),
    },
    actions: ['Continuar'],
  },
  naturalPerson: {
    handlers: {
      prev: () => emit('update:currentStep', 'welcome'),
      next: () => emit('update:currentStep', 'password'),
    },
    actions: ['Voltar']['Continuar'],
  },
  legalEntity: {
    handlers: {
      prev: () => emit('update:currentStep', 'welcome'),
      next: () => emit('update:currentStep', 'password'),
    },
    actions: ['Voltar']['Continuar'],
  },
  password: {
    handlers: {
      prev: () => emit('update:currentStep', 'naturalPerson'),
      next: () => emit('update:currentStep', 'review'),
    },
    actions: ['Voltar']['Continuar'],
  },
  review: {
    handlers: {
      prev: () => emit('update:currentStep', 'password'),
    },
    actions: ['Voltar']['Cadastrar'],
  },
}

function goToStep() {
  steps[props.currentStep].handlers.next()
}

function goPrevStep() {
  steps[props.currentStep].handlers.prev()
}
</script>

<style>
.step-button {
  display: flex;
  margin-top: 16px;
  gap: 16px;
}
</style>

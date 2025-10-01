<template>
  <div class="step-button">
    <mbc-base-button
      v-if="props.currentStep !== 'welcome'"
      @click="goPreviousStep"
      variant="secondary"
      type-button="button"
      label="Voltar"
    />
    <mbc-base-button
      v-if="props.currentStep === 'review'"
      @click="dataFromApi"
      variant="primary"
      type-button="submit"
      label="Cadastrar"
    />
    <mbc-base-button
      v-if="props.currentStep !== 'review'"
      @click="goNextStep"
      variant="primary"
      type-button="button"
      label="Continuar"
      :disabled="isDisable"
    />
  </div>
</template>

<script setup>
import { defineEmits, computed } from 'vue'
import MbcBaseButton from '../mbc-base-button/mbc-base-button.vue'

const props = defineProps({
  currentStep: String,
  formData: Object,
  isDisable: {
    type: Boolean,
  },
})

const emit = defineEmits(['update:currentStep'])
const steps = ['welcome', 'naturalPerson', 'legalEntity', 'password', 'review']

function goNextStep(event) {
  event.preventDefault()
  const currentIndex = steps.indexOf(props.currentStep)
  if (currentIndex < steps.length) {
    const nextStep = steps[currentIndex + 1]
    emit('update:currentStep', nextStep)
  }
}

function goPreviousStep() {
  const currentIndex = steps.indexOf(props.currentStep)
  if (currentIndex > 0) {
    const prevStep = steps[currentIndex - 1]
    emit('update:currentStep', prevStep)
  }
}

async function dataFromApi(event) {
  event.preventDefault()
  try {
    const response = await fetch('http://localhost:3000/v1/post/registration', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }, // informa o tipo de conteúdo que receberá como resposta
      body: JSON.stringify(props.formData), // converte um valor js em uma string JSON
    })

    const data = await response.json()

    if (response.status !== 201) {
      return alert(data.error)
    } else {
      alert(data.message)
    }
  } catch (error) {
    console.error('Erro!', error)
  }
}
</script>

<style>
.step-button {
  display: flex;
  margin-top: 16px;
  gap: 16px;
}
</style>

<template>
  <div class="step-button">
    <mbc-base-button
      v-if="props.currentStep > 0"
      variant="secondary"
      type-button="button"
      label="Voltar"
      @click="prevStep"
    />
    <mbc-base-button
      variant="primary"
      :type-button="typeButton"
      :label="textLabel"
      :disabled="buttonDisabled"
      @click="nextStep"
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import MbcBaseButton from '../mbc-base-button/mbc-base-button.vue'
import dataFromApi from '@/services/api-data'

const props = defineProps({
  currentStep: Number,
  totalSteps: Number,
  buttonDisabled: {
    type: Boolean,
  },
  formData: Object,
})

const currentStep = ref(props.currentStep)

const emit = defineEmits(['update:currentStep'])

const currentStepIsLastOne = computed(() => props.totalSteps === currentStep.value + 1)
const typeButton = computed(() => (currentStepIsLastOne.value ? 'submit' : 'button'))
const textLabel = computed(() => (currentStepIsLastOne.value ? 'Cadastrar' : 'Continuar'))

function prevStep() {
  currentStep.value--
  emit('update:currentStep', currentStep.value)
}

function nextStep(e) {
  e.preventDefault()

  if (currentStepIsLastOne.value) {
    return dataFromApi(props.formData)
  } else {
    currentStep.value++
    return emit('update:currentStep', currentStep.value)
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

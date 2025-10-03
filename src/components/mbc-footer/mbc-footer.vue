<template>
  <div class="step-button">
    <mbc-base-button
      v-if="props.currentStep > 1"
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
      @click.once="nextStep"
    />
  </div>
</template>

<script setup>
import { computed, defineEmits, ref } from 'vue'
import MbcBaseButton from '../mbc-base-button/mbc-base-button.vue'

const props = defineProps({
  currentStep: Number,
  totalSteps: Number,
  buttonDisabled: {
    type: Boolean,
  },
})

const currentStep = ref(props.currentStep)

const emit = defineEmits(['update:currentStep'])

const typeButton = computed(() => (props.totalSteps === props.currentStep ? 'submit' : 'button'))
const textLabel = computed(() =>
  props.totalSteps === props.currentStep ? 'Cadastrar' : 'Continuar',
)

function prevStep() {
  emit('update:currentStep', currentStep.value--)
}

function nextStep() {
  currentStep.value++
  emit('update:currentStep', currentStep.value)
}
</script>

<style>
.step-button {
  display: flex;
  margin-top: 16px;
  gap: 16px;
}
</style>

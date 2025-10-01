<template>
  <div class="third-step-container">
    <h1 class="password-access-title">Senha de acesso</h1>
    <mbc-base-input
      v-model="localData.password"
      type-input="password"
      title="Sua senha"
      maxlength="12"
      id="input-access-password"
      error-message="Insira uma senha válida"
      :validate-input="(inputValue) => validateRulesAndLength(inputValue, 8, 12)"
      @valid="isValid = $event"
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { validateRulesAndLength } from '@/helpers/password-helper'
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
@use './mbc-access-password.scss';
</style>

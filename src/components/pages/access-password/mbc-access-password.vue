<template>
  <div class="third-step-container">
    <mbc-base-input
      v-model="formData.password"
      type-input="password"
      title="Sua senha"
      maxlength="12"
      id="input-access-password"
      error-message="Insira uma senha válida"
      :validate-input="(inputValue) => validateRulesAndLength(inputValue, 8, 12)"
    />
  </div>
</template>

<script setup>
import { validateRulesAndLength } from '@/helpers/password-helper'
import MbcBaseInput from '@/components/mbc-base-input/mbc-base-input.vue'

const props = defineProps({
  formData: {
    type: Object,
  },
})

const emit = defineEmits(['update:formData'])
</script>

<style lang="scss">
@use './mbc-access-password.scss';
</style>

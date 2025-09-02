<script setup>
import MbcBaseInput from '@/components/base-input/mbc-base-input.vue'
import { ref } from 'vue'

const responseFromBaseInput = ref('')

function validationEmail() {
  const regexExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
}
</script>

<template>
  <MbcBaseInput v-model="responseFromBaseInput" />
</template>

<style scoped></style>

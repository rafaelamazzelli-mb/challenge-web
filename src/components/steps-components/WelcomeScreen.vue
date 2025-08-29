<script setup>
import BaseInput from '@/components/base-components/BaseInput.vue'
import { ref } from 'vue'

const responseFromInput = ref('')
</script>

<template>
  <span>Etapa 1 de 4</span>
  <h1>Seja bem vindo (a)</h1>
  <BaseInput v-model="responseFromInput" />
  {{ responseFromInput }}
</template>

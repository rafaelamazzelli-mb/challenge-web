<script setup>
defineProps(['totalSteps', 'currentStep'])

import './styles.scss'
</script>

<template>
  <span
    >Etapa
    <div class="current-step">{{ currentStep }}</div>
    de {{ totalSteps }}</span
  >
</template>

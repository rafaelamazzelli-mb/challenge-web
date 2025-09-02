<script setup>
const props = defineProps(['variant', 'typeButton'])

import './styles.scss'
</script>

<template>
  <div class="base-button-container">
    <button :class="['base-button', variant]">{{ typeButton }}</button>
  </div>
</template>

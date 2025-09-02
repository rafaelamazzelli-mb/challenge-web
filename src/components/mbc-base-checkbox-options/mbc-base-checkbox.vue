<script setup>
import './styles.scss'

defineProps(['typePerson'])
</script>

<template>
  <div class="type-person-container">
    <input type="checkbox" />
    <label>{{ typePerson }}</label>
  </div>
</template>

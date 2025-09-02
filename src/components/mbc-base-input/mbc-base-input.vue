<script setup>
defineProps(['nameLabel', 'inputType'])

import './styles.scss'
</script>

<template>
  <div class="container-input">
    <label class="base-label"> {{ nameLabel }} </label>
    <input class="base-input" v-model="inputValue" :type="inputType" v-bind="$attrs" />
  </div>
</template>

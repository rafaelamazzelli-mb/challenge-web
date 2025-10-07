<template>
  <div class="fourth-step-container">
    <mbc-email-step :form-data="props.formData" />
    <component :is="typePerson" :form-data="props.formData" />
    <mbc-access-password :form-data="props.formData" />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import MbcEmailStep from '../email-step/mbc-email-step.vue'
import MbcAccessPassword from '../access-password/mbc-access-password.vue'

const props = defineProps({
  formData: {
    type: Object,
  },
})

const typePerson =
  props.formData.typePerson === 'pessoa-fisica'
    ? defineAsyncComponent(() => import('@/components/pages/natural-person/mbc-natural-person.vue'))
    : defineAsyncComponent(() => import('@/components/pages/legal-entity/mbc-legal-entity.vue'))

const emit = defineEmits(['update:formData'])
</script>

<style lang="scss">
@use './mbc-review-information.scss';
</style>

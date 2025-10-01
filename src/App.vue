<template>
  <div class="app-container">
    <form class="form-container">
      <h1 class="step-title">Etapa {{ stepsTitle[currentStep] }} de 4</h1>
      <component :is="steps[currentStep]" :form-data="formData" />
      <mbc-footer
        :current-step="currentStep"
        :form-data="formData"
        :is-disable="isNextStepButtonDisabled"
        @update:current-step="(step) => (currentStep = step)"
      />
    </form>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent, computed } from 'vue'
import MbcFooter from '@/components/mbc-footer/mbc-footer.vue'

const steps = {
  welcome: defineAsyncComponent(() => import('./components/pages/welcome/mbc-welcome.vue')),
  naturalPerson: defineAsyncComponent(
    () => import('./components/pages/natural-person/mbc-natural-person.vue'),
  ),
  legalEntity: defineAsyncComponent(
    () => import('./components/pages/legal-entity/mbc-legal-entity.vue'),
  ),
  password: defineAsyncComponent(
    () => import('./components/pages/access-password/mbc-access-password.vue'),
  ),
  review: defineAsyncComponent(
    () => import('./components/pages/review-information/mbc-review-information.vue'),
  ),
}

const currentStep = ref('welcome')

const stepsTitle = {
  welcome: 1,
  naturalPerson: 2,
  legalPerson: 2,
  password: 3,
  review: 4,
}

const formData = ref({
  email: '',
  name: '',
  number: '',
  date: '',
  phoneNumber: '',
  password: '',
  typePerson: '',
})

// const testeFormData = Object.values(formData)

// function teste() {
//   console.log(formData.value)
//   console.log(currentStep.value)
// }

const isNextStepButtonDisabled = computed(() => {
  const { email, name, number, date, phoneNumber, password, typePerson } = formData.value
  if (currentStep.value === 'welcome' && (!email || !typePerson)) {
    return true
  }
  if (currentStep.value === 'naturalPerson' && (!name || !number || !date || !phoneNumber)) {
    return true
  }
  if (currentStep.value === 'legalEntity' && (!name || !number || !date || !phoneNumber)) {
    return true
  }
  if (currentStep.value === 'password' && !password) {
    return true
  }
})

console.log('uva3', isNextStepButtonDisabled.value)
</script>

<style lang="scss">
@use '/src/styles/variables.scss' as vars;

.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form-container {
  width: 20%;
}

.step-title {
  font-weight: 400;
  margin: 0 0 8px 0;
}

.orange-number {
  color: vars.$primary-and-secondary-color;
}
</style>

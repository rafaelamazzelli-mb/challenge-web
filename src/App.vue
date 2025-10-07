<template>
  <div class="app-container">
    <form class="form-container">
      <h1 class="step-title">
        Etapa <span class="orange-number">{{ steps[currentStep].order + 1 }}</span> de 4
      </h1>
      <h2 class="form-title">{{ steps[currentStep].title }}</h2>
      <component
        :is="steps[currentStep].component"
        :form-data="formData"
        :show-radio-input="true"
        @update:formData="(valueInput) => (formData.value = valueInput)"
      />
      <mbc-footer
        :button-disabled="isNextStepButtonDisabled"
        :current-step="steps[currentStep].order"
        :total-steps="totalSteps"
        @update:current-step="(step) => updateCurrentStepValue(step)"
        :form-data="formData"
      />
    </form>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent, computed } from 'vue'
import MbcFooter from '@/components/mbc-footer/mbc-footer.vue'

const formData = ref({
  email: '',
  name: '',
  identificationNumber: '',
  date: '',
  phoneNumber: '',
  password: '',
  typePerson: '',
})

const steps = computed(() => {
  return {
    email: {
      component: defineAsyncComponent(
        () => import('./components/pages/email-step/mbc-email-step.vue'),
      ),
      order: 0,
      title: 'Seja bem vindo(a)',
    },

    typePerson: {
      component:
        formData.value.typePerson === 'pessoa-fisica'
          ? defineAsyncComponent(
              () => import('./components/pages/natural-person/mbc-natural-person.vue'),
            )
          : defineAsyncComponent(
              () => import('./components/pages/legal-entity/mbc-legal-entity.vue'),
            ),
      order: 1,
      title: formData.value.typePerson === 'pessoa-fisica' ? 'Pessoa Física' : 'Pessoa Jurídica',
    },

    password: {
      component: defineAsyncComponent(
        () => import('./components/pages/access-password/mbc-access-password.vue'),
      ),
      order: 2,
      title: 'Senha de acesso',
    },
    review: {
      component: defineAsyncComponent(
        () => import('./components/pages/review-information/mbc-review-information.vue'),
      ),
      order: 3,
      title: 'Revise as suas informações',
    },
  }
})

const totalSteps = computed(() => {
  return Object.keys(steps.value).length
})

const currentStep = ref('email')

function updateCurrentStepValue(stepNumber) {
  for (let step = 0; totalSteps.value > step; step++) {
    const stepName = Object.keys(steps.value)[step]

    if (steps.value[stepName].order === stepNumber) {
      currentStep.value = stepName
    }
  }
}

const isNextStepButtonDisabled = computed(() => {
  const { email, name, number, date, phoneNumber, password, typePerson } = formData.value
  if (currentStep.value === 'email' && (!email || !typePerson)) {
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

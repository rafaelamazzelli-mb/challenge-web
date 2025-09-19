<script setup>
import { ref } from 'vue'
import MbcWelcome from './components/pages/welcome/mbc-welcome.vue'
import MbcNaturalLegalPerson from './components/pages/natural-person-or-legal-entity/mbc-natural-legal-person.vue'
import MbcAccessPassword from './components/pages/access-password/mbc-access-password.vue'
import MbcReviewInformation from './components/pages/review-information/mbc-review-information.vue'
import MbcBaseButton from './components/mbc-base-button/mbc-base-button.vue'

const currentStep = ref(1)
const totalSteps = 4
const formData = ref({
  email: '',
  name: '',
  number: '',
  date: '',
  phoneNumber: '',
  password: '',
  typePerson: '',
})

function handleNextStep(event) {
  event.preventDefault()
  console.log(currentStep.value)
  if (currentStep.value === 1 && (!formData.value.email || !formData.value.typePerson)) {
    return
  } else if (
    currentStep.value === 2 &&
    (!formData.value.name ||
      !formData.value.number ||
      !formData.value.date ||
      !formData.value.phoneNumber)
  ) {
    return
  } else if (currentStep.value === 3 && !formData.value.password) {
    return
  } else {
    currentStep.value++
  }
}
</script>
<template>
  <div class="app-container">
    <form class="form-container" action="services/">
      <h3 v-if="currentStep === 1" class="step-title">
        Etapa <span class="orange-number">1</span> de 4
      </h3>
      <mbc-welcome v-show="currentStep === 1" :form-data="formData" />

      <h3 v-if="currentStep === 2" class="step-title">
        Etapa <span class="orange-number">2</span> de 4
      </h3>
      <mbc-natural-legal-person v-if="currentStep === 2" :form-data="formData" />

      <h3 v-if="currentStep === 3" class="step-title">
        Etapa <span class="orange-number">3</span> de 4
      </h3>
      <mbc-access-password v-show="currentStep === 3" :form-data="formData" />

      <h3 v-if="currentStep === 4" class="step-title">
        Etapa <span class="orange-number">4</span> de 4
      </h3>
      <mbc-review-information v-show="currentStep === 4" :form-data="formData" />

      <div class="step-button">
        <mbc-base-button
          v-if="currentStep > 1"
          variant="secondary"
          type-button="button"
          @click="currentStep--"
          label="Voltar"
        />
        <mbc-base-button
          v-if="currentStep === totalSteps"
          variant="primary"
          type-button="submit"
          label="Cadastrar"
        />
        <mbc-base-button
          v-if="currentStep !== totalSteps"
          variant="primary"
          type-button="button"
          @click="handleNextStep"
          label="Continuar"
        />
      </div>
    </form>
  </div>
</template>

<style lang="scss">
@import '/src/styles/main.scss';

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
  color: $primary-and-secondary-color;
}

.step-button {
  display: flex;
  margin-top: 16px;
  gap: 16px;
}
</style>

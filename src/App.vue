<template>
  <div class="app-container">
    <form class="form-container">
      <h1 class="step-title">Etapa {{ steps[currentStep].order }} de 4</h1>
      <component
        :is="steps[currentStep].component"
        :form-data="formData"
        @update:formData="(valueInput) => (formData.value = valueInput)"
      />
      <mbc-footer
        :button-disabled="isNextStepButtonDisabled"
        :current-step="steps[currentStep].order"
        :total-steps="totalSteps"
        @update:current-step="(step) => teste(step)"
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
  number: '',
  date: '',
  phoneNumber: '',
  password: '',
  typePerson: '',
})

const typePersonComponent = computed(() => {
  return formData.value.typePerson === 'pessoa-fisica'
    ? defineAsyncComponent(() => import('./components/pages/natural-person/mbc-natural-person.vue'))
    : defineAsyncComponent(() => import('./components/pages/legal-entity/mbc-legal-entity.vue'))
})

const steps = computed(() => {
  return {
    email: {
      component: defineAsyncComponent(
        () => import('./components/pages/email-step/mbc-email-step.vue'),
      ),
      order: 0,
    },

    typePerson: {
      component: typePersonComponent,
      order: 1,
    },

    password: {
      component: defineAsyncComponent(
        () => import('./components/pages/access-password/mbc-access-password.vue'),
      ),
      order: 2,
    },
    review: {
      component: defineAsyncComponent(
        () => import('./components/pages/review-information/mbc-review-information.vue'),
      ),
      order: 3,
    },
  }
})

const totalSteps = computed(() => {
  return Object.keys(steps.value).length
})

const currentStep = ref('email')

function teste(stepNumber) {
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

async function dataFromApi(event) {
  event.preventDefault()
  try {
    const response = await fetch('http://localhost:3000/v1/post/registration', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(props.formData),
    })

    const data = await response.json()

    if (response.status !== 201) {
      return alert(data.error)
    } else {
      alert(data.message)
    }
  } catch (error) {
    console.error('Erro!', error)
  }
}

// const frutas = {
//   banana: {
//     cor: 'amarela',
//     calorias: 89,
//   },
//   maca: {
//     cor: 'vermelha',
//     calorias: 52,
//   },
//   laranja: {
//     cor: 'laranja',
//     calorias: 47,
//   },
// }

// const calorias = 47

// function testeFrutas() {
//   for (let i = 0; Object.keys(frutas).length > i; i++) {
//     const fruta = Object.keys(frutas)[i]

//     if (frutas[fruta].calorias === calorias) {
//       return fruta
//     }
//   }
// }
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

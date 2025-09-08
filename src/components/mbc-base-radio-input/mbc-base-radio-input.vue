<template>
  <label :for="personType" class="label-person-type">
    <input
      type="radio"
      class="input-person-type"
      :id="personType"
      :value="valueSelectedInput"
      :name="nameAttributeValue"
      @change="updateModelValue"
    />
    {{ props.personType }}
  </label>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
  },
  valueSelectedInput: {
    type: String,
  },
  personType: {
    type: String,
  },
  nameAttributeValue: {
    type: String,
  },
})

const emit = defineEmits(['update:modelValue'])

function updateModelValue(event) {
  const responseFromRadio = event.target.value
  emit('update:modelValue', responseFromRadio)
}
</script>

<style lang="scss">
@import url('./styles.scss');
</style>

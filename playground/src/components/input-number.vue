<template>
  <box-component :name="`${name}`">
    <p-input-number
      class="test-p-input-number"
      verification-type="numeric"
      v-model="num1"
      placeholder="ddddddd"
      clearable
      :max="82.21"
      :min="-2.73"
      :precision="3"
      :fillPrecision="false"
      @blur="handleBlur"
      @input="handleInput"
      :style="{ '--n-border-radius': '6px' }"
    />
    <div>num1：[{{ num1 }}]</div>
  </box-component>
</template>

<script setup>
import { ref } from 'vue'
import BoxComponent from './box-component.vue'

defineOptions({
  name: 'PInputNumberWithBox'
})

const name = 'PInputNumber'
const num1 = ref(88)

setTimeout(() => {
  num1.value = 1.2193
}, 3000)

function handleBlur(detail) {
  console.log('🚀 ~ handleBlur ~ detail:', detail)
}

function handleInput({ value }) {
  console.log('🚀 ~ handleInput ~ value:', value)
}
</script>

<style>
.n-input.test-p-input-number {
  width: 50%;
}
</style>

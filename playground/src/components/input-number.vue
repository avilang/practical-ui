<template>
  <box-component :name="`${name}`">
    <p-input-number class="test-p-input-number" verification-type="positiveIntegerContainZero" v-model="num1" />
    <div>值：[{{ num1 }}]</div>
  </box-component>
</template>

<script setup>
import { ref } from 'vue'
import BoxComponent from './box-component.vue'

defineOptions({
  name: 'PInputNumberWithBox'
})

const name = 'PInputNumber'
const num1 = ref('-0.0')
</script>

<style>
.n-input.test-p-input-number {
  width: 50%;
}
</style>

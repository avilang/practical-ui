<template>
  <n-form :show-label="showLabel" :model="formValue" @submit.prevent="handleSubmit">
    <n-form-item
      v-for="(item, index) in model"
      :key="item.field || `${item.type}-${index}`"
      :label="item.label"
      :path="item.field"
    >
      <component v-if="item.type === 'input'" :is="Input" v-model="formValue[item.field]" v-bind.prop="item.props" />
    </n-form-item>
    <slot></slot>
  </n-form>
</template>

<script setup>
import { ref } from 'vue'
import { NForm, NFormItem } from 'naive-ui'
import { PInput as Input } from '../input/index.js'
import { debounce } from '../utility/throttle-debounce'

defineOptions({
  name: 'PForm',
  inheritAttrs: false
})

const { model } = defineProps({
  model: { type: Array, default: () => [] },
  showLabel: { type: Boolean, default: true }
})
const formValue = (function () {
  const data = {}
  model.forEach((item) => {
    data[item.field] = item.value
  })
  return ref(data)
})()

function getFormValue() {
  return formValue.value
}

const emit = defineEmits(['submit'])
const handleSubmit = debounce(function () {
  document.activeElement && document.activeElement.blur()
  emit('submit', getFormValue())
})
</script>

<template>
  <n-form :show-label="showLabel">
    <n-form-item v-for="(item, index) in model" :key="item.field || `${item.type}-${index}`" :label="item.label">
      <component :is="setElem(item.type)" v-bind.prop="item.props" />
    </n-form-item>
  </n-form>
</template>

<script setup>
import { NForm, NFormItem } from 'naive-ui'
import { PInput as Input } from '../input/index.js'

defineOptions({
  name: 'PForm',
  inheritAttrs: false
})

const { model } = defineProps({
  model: { type: Array, default: () => [] },
  showLabel: { type: Boolean, default: true }
})

const setElem = (type) => {
  const typeMap = {
    input: Input
  }
  return typeMap[type] || null
}
</script>

<template>
  <n-form
    ref="form"
    :show-label="showLabel"
    :label-placement="labelPlacement"
    label-width="auto"
    :label-align="labelPlacement === 'left' ? 'right' : 'left'"
    :model="formValue"
    :rules="rules"
    @submit.prevent="handleSubmit"
  >
    <n-form-item v-for="item in model" :key="item.field" :label="item.label" :path="item.field" :first="true">
      <component
        v-if="!item.slot && item.type === 'input'"
        :is="Input"
        v-model="formValue[item.field]"
        v-bind.prop="{ disabled, readonly, ...item.props }"
      />
      <slot v-else :name="item.field" />
    </n-form-item>
    <slot></slot>
  </n-form>
</template>

<script setup>
import { ref, toValue, useTemplateRef } from 'vue'
import { NForm, NFormItem } from 'naive-ui'
import { PInput as Input } from '../input/index.js'
import { debounce } from '../utility/throttle-debounce'

defineOptions({
  name: 'PForm',
  inheritAttrs: false
})

const { model } = defineProps({
  model: { type: Array, default: () => [] },
  rules: { type: Object, default: () => {} },
  showLabel: { type: Boolean, default: true },
  labelPlacement: { type: String, default: 'left' },
  readonly: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false }
})
const formValue = (function () {
  const data = {}
  model.forEach((item) => {
    if (item.slot) return
    data[item.field] = item.value
  })
  return ref(data)
})()

function getFormValue() {
  const data = {}
  model.forEach((item) => {
    if (item.slot) data[item.field] = toValue(item.value)
  })
  return { ...formValue.value, ...data }
}

const emit = defineEmits(['submit'])
const form = useTemplateRef('form')
const handleSubmit = debounce(function () {
  document.activeElement && document.activeElement.blur()
  form.value
    .validate((errors) => {
      emit('submit', { formData: getFormValue(), valid: !errors || errors.length === 0, errors })
    })
    .catch(() => null)
})
</script>

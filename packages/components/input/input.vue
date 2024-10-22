<template>
  <n-input
    :input-props="{ autocomplete: 'off' }"
    :type="type"
    :value="value"
    :maxlength="maxlength"
    :show-count="showCount"
    :count-graphemes="maxlength != null && maxlength > 0 && showCount ? countGraphemes : void 0"
    :placeholder="placeholder"
    :on-input="handleInput"
    @blur="handleBlur"
  />
</template>

<script setup>
import { NInput } from 'naive-ui'
import { countGraphemes } from '../utility/util'

defineOptions({
  name: 'PInput',
  inheritAttrs: false
})

const { trim } = defineProps({
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  maxlength: { type: Number },
  showCount: { type: Boolean, default: false },
  trim: { type: Boolean, default: true }
})
const value = defineModel({ type: String, default: '' })
const emit = defineEmits(['blur', 'input'])

function handleValueWithTrim() {
  let v = value.value
  if (trim) {
    const vWithTrim = v.trim()
    value.value = vWithTrim
    v = vWithTrim
  }
  return v
}

function handleBlur() {
  const val = handleValueWithTrim()
  emit('blur', { value: val })
}

function handleInput(val) {
  value.value = val

  let v = val
  if (trim) {
    v = v.trim()
  }
  emit('input', { value: v })
}
</script>

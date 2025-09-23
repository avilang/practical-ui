<template>
  <input-inner
    :class="`${$attrs.class ? $attrs.class : ''} ${valueInfo.type === 'error' && inputText != null && inputText !== '' ? 'p-input-identifier-error' : ''}`"
    :trim="true"
    :placeholder="placeholder"
    :size="size"
    :maxlength="maxlength"
    :disabled="disabled"
    :readonly="readonly"
    :clearable="clearable"
    v-model="inputText"
    @input="onInput"
    @blur="onBlur"
  />
</template>

<script setup>
import { nextTick, onMounted, ref, watch } from 'vue'
import { PInput as InputInner } from '../input/index.js'

defineOptions({
  name: 'PInputIdentifier',
  inheritAttrs: false
})

const { verification } = defineProps({
  size: { type: String, default: 'medium' },
  placeholder: { type: String, default: '请输入' },
  maxlength: { type: Number },
  disabled: { type: Boolean, default: false },
  clearable: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  verification: { type: [String, Function], default: 'identifier' }
})
const value = defineModel({ type: String })
const valueInfo = ref({ type: 'ok' }) // 记录输入的信息，用于显示处理
const inputText = ref('') // 输入框显示的值
const verificationTypes = ['numeric', 'identifier', 'en']
const checkType = verificationTypes.indexOf(verification) === -1 ? 'identifier' : verification
const oType = (function () {
  return {
    isFn: typeof verification === 'function',
    isNumeric: checkType === 'numeric',
    isIdentifier: checkType === 'identifier',
    isEn: checkType === 'en'
  }
})()
const isNumeric = /^[0-9]+$/
const isIdentifier = /^[a-zA-Z0-9_]+$/
const isEn = /^[a-zA-Z]+$/

// 监听value变化，更新inputText
// 仅传入value变化/初始化/失去焦点后会更新
watch(
  value,
  (v) => {
    if (valueInfo.value.type !== 'ok') return
    handleValue(`${v == null || v === '' ? '' : v}`.trim(), true)
    updateInputText()
  },
  { immediate: false }
)

function setValue(val, valInfo = {}) {
  valueInfo.value = valInfo
  value.value = val
  return val
}

function updateInputText() {
  const v = value.value
  if (v == null || v === '') {
    inputText.value = ''
  } else {
    inputText.value = `${v}`
  }
}

function handleValue(val, forOK = false) {
  let ok = false
  let result = null
  let regular = null

  if (oType.isFn === false) {
    if (oType.isNumeric) {
      regular = isNumeric
    } else if (oType.isIdentifier) {
      regular = isIdentifier
    } else if (oType.isEn) {
      regular = isEn
    }
  }

  if (regular) {
    ok = regular.test(val)
  } else {
    ok = verification(val)
  }

  if (ok) {
    result = setValue(val, { type: forOK ? 'ok' : 'inputok' }, { forOK })
    return result
  } else {
    result = setValue('', { type: forOK ? 'ok' : val.trim() === '' ? 'ok' : 'error' }, { forOK })
    return result
  }
}

onMounted(() => {
  handleValue(`${value.value == null || value.value === '' ? '' : value.value}`.trim(), true)
  nextTick(() => {
    updateInputText()
  })
})

const emit = defineEmits(['blur', 'input'])

function onInput({ value }) {
  const v = handleValue(value)
  emit('input', { value: v })
}

function onBlur(detail) {
  const v = handleValue(detail.value, true)
  nextTick(() => {
    updateInputText()
    emit('blur', { ...detail, value: v })
  })
}
</script>

<style>
.n-input.p-input-identifier-error .n-input__input-el {
  text-decoration: line-through;
}
</style>

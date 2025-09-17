<template>
  <input-number
    :class="`${$attrs.class ? $attrs.class : ''} ${valueInfo.type === 'error' && inputText != null && inputText !== '' ? 'p-input-number-error' : ''}`"
    :trim="false"
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
import { PInput as InputNumber } from '../input/index.js'
import { PBig } from '../utility/util.js'

defineOptions({
  name: 'PInputNumber',
  inheritAttrs: false
})

const { verificationType, max, min } = defineProps({
  size: { type: String, default: 'medium' },
  placeholder: { type: String, default: '请输入' },
  maxlength: { type: Number },
  disabled: { type: Boolean, default: false },
  clearable: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  max: { type: Number },
  min: { type: Number },
  verificationType: { type: String, default: 'positiveIntegerContainZero' }
})
const value = defineModel({ type: [Number, String] }) // 真正的数值
const valueInfo = ref({ type: 'ok' }) // 记录输入值的信息，用于显示处理
const inputText = ref('') // 输入框显示的值
const verificationTypes = [
  'numeric',
  'positiveNumber',
  'positiveNumberContainZero',
  'positiveInteger',
  'positiveIntegerContainZero'
]
const checkType = verificationTypes.indexOf(verificationType) === -1 ? 'positiveIntegerContainZero' : verificationType
const oType = (function () {
  return {
    isNumeric: checkType === 'numeric',
    isPositiveNumber: checkType === 'positiveNumber',
    isPositiveNumberContainZero: checkType === 'positiveNumberContainZero',
    isPositiveInteger: checkType === 'positiveInteger',
    isPositiveIntegerContainZero: checkType === 'positiveIntegerContainZero'
  }
})()
const isNumeric = /^[-]?[0-9]$|^[-]?[1-9][0-9]+$|^[-]?0\.[0-9]+$|^[-]?[1-9][0-9]*\.[0-9]+$/ // 是否为数字（零、正数、负数）
const isPositiveNumber = /^[1-9]$|^[1-9][0-9]+$|^0\.[0-9]+$|^[1-9][0-9]*\.[0-9]+$/ // 是否为正数（不包含零）注意这里 0.0 是允许的，所以这里判断不包含零是不准确的
const isPositiveNumberContainZero = /^[0-9]$|^[1-9][0-9]+$|^0\.[0-9]+$|^[1-9][0-9]*\.[0-9]+$/ // 是否为正数（包含零）
const isPositiveInteger = /^[1-9]$|^[1-9][0-9]+$/ // 是否为正整数（不包含零）
const isPositiveIntegerContainZero = /^[0-9]$|^[1-9][0-9]+$/ // 是否为正整数（包含零）
const numericText = /^[-]?0\.$|^[1-9][0-9]*\.$/ // 匹配如 -0. / 0. / 45. / 9.
const numericTextIgnoreZero = /^[1-9][0-9]*\.$/
const numericTextWithNegative = /^[-]?0\.$|^[-]?[1-9][0-9]*\.$/ // 匹配如 -0. / 0. / 45. / 9. / -12.
const zero = /^[-]?0\.$|^[-]?0\.[0]+$|^[-]?0$/ // 匹配 -0. / 0. / 0.000 / -0.0

// 监听value变化，更新inputText
// 仅传入value变化/初始化/失去焦点后会更新
watch(
  value,
  (v) => {
    if (valueInfo.value.type !== 'ok') return
    handleValue(`${v == null || v === '' ? '' : v}`, true)
    updateInputText()
  },
  { immediate: false }
)

function setValue(val, valInfo = {}, opts = {}) {
  if (val == null || val === '') {
    valueInfo.value = valInfo
    value.value = val
    return
  }

  let bigNum = null
  if ((max != null && max !== '') || (min != null && min !== '')) {
    bigNum = PBig(`${val}`)
  }
  if (bigNum != null) {
    if (max != null && max !== '' && bigNum.gt(`${max}`)) {
      valueInfo.value = { type: opts.forOK ? 'ok' : 'error' }
      value.value = null
      return
    }
    if (min != null && min !== '' && bigNum.lt(`${min}`)) {
      valueInfo.value = { type: opts.forOK ? 'ok' : 'error' }
      value.value = null
      return
    }
  }

  valueInfo.value = valInfo
  value.value = val
}

function updateInputText(val) {
  const v = val == null ? value.value : val
  if (v == null || v === '') {
    inputText.value = ''
  } else {
    inputText.value = `${v}`
  }
}

function handleValue(val, forOK = false) {
  let regular = null
  if (oType.isNumeric) {
    regular = isNumeric
  } else if (oType.isPositiveNumber) {
    regular = isPositiveNumber
  } else if (oType.isPositiveNumberContainZero) {
    regular = isPositiveNumberContainZero
  } else if (oType.isPositiveInteger) {
    regular = isPositiveInteger
  } else if (oType.isPositiveIntegerContainZero) {
    regular = isPositiveIntegerContainZero
  }

  let ok = regular.test(val)
  if (ok && oType.isPositiveNumber) {
    if (parseFloat(val) === 0) {
      ok = false
    }
  }

  if (ok) {
    // 避免如传入 '0.0' 的字符串，前端显示为 '0.0'
    // 零 统一显示为 0
    if (forOK && Math.abs(parseFloat(val)) === 0) {
      setValue(0, { type: 'ok' }, { forOK })
    } else {
      setValue(val, { type: forOK ? 'ok' : 'inputok' }, { forOK })
    }
  } else {
    if (oType.isPositiveIntegerContainZero) {
      if (isNumeric.test(val)) {
        if (Math.abs(parseFloat(val)) === 0) {
          setValue(0, { type: forOK ? 'ok' : 'warning' }, { forOK })
          return
        }
      } else if (numericText.test(val)) {
        setValue(`${Math.abs(parseFloat(val))}`, { type: forOK ? 'ok' : 'warning' }, { forOK })
        return
      }
    } else if (oType.isPositiveInteger) {
      if (numericTextIgnoreZero.test(val)) {
        setValue(`${parseInt(val)}`, { type: forOK ? 'ok' : 'warning' }, { forOK })
        return
      }
    } else if (oType.isPositiveNumber) {
      if (numericTextIgnoreZero.test(val)) {
        setValue(`${parseFloat(val)}`, { type: forOK ? 'ok' : 'warning' }, { forOK })
        return
      }
    } else if (oType.isPositiveNumberContainZero) {
      if (numericText.test(val) || zero.test(val)) {
        setValue(`${Math.abs(parseFloat(val))}`, { type: forOK ? 'ok' : 'warning' }, { forOK })
        return
      }
    } else if (oType.isNumeric) {
      if (numericTextWithNegative.test(val)) {
        setValue(`${parseFloat(val)}`, { type: forOK ? 'ok' : 'warning' }, { forOK })
        return
      }
    }
    setValue(null, { type: forOK ? 'ok' : 'error' }, { forOK })
  }
}

onMounted(() => {
  handleValue(`${value.value == null || value.value === '' ? '' : value.value}`, true)
  nextTick(() => {
    updateInputText()
  })
})

function onInput({ value }) {
  const v = (value || '').trim()
  inputText.value = v

  handleValue(v)
}

function onBlur(detail) {
  handleValue((detail.value || '').trim(), true)
  // 确保更新 inputText
  // 可能因 valueInfo 改变，但 value 值没变化，无法触发 watch 监听
  nextTick(() => {
    updateInputText()
  })
}
</script>

<style>
.n-input.p-input-number-error .n-input__input-el {
  text-decoration: line-through;
}
</style>

<template>
  <n-input
    :class="`${attrs.class ? attrs.class : ''}`"
    ref="input"
    :input-props="{ autocomplete: 'off' }"
    :type="type"
    :size="size"
    :show-password-on="showPassword ? 'click' : void 0"
    :value="value"
    :maxlength="maxlength"
    :show-count="showCount"
    :count-graphemes="(maxlength != null && maxlength > 0) || showCount ? countGraphemes : void 0"
    :placeholder="placeholder"
    :autofocus="autofocus"
    :disabled="disabled"
    :readonly="readonly"
    :clearable="clearable"
    :autosize="type !== 'textarea' ? false : autosize"
    @input="handleInput"
    @blur="handleBlur"
    @keyup.enter="handleEnter"
  >
    <template v-if="prefixIcon" #prefix>
      <n-icon v-bind="prefixIcon" />
    </template>
  </n-input>
</template>

<script setup>
import { useTemplateRef, useAttrs } from 'vue'
import { NInput, NIcon } from 'naive-ui'
import { countGraphemes } from '../utility/util'

defineOptions({
  name: 'PInput',
  inheritAttrs: false
})

const { trim, blurByEnter } = defineProps({
  type: { type: String, default: 'text' },
  size: { type: String, default: 'medium' },
  placeholder: { type: String, default: '请输入' },
  maxlength: { type: Number },
  showCount: { type: Boolean, default: false },
  autofocus: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  clearable: { type: Boolean, default: false },
  autosize: { type: [Object, Boolean], default: true },
  readonly: { type: Boolean, default: false },
  trim: { type: Boolean, default: true }, // 默认去除首尾空格
  showPassword: { type: Boolean, default: false }, // 是否显示密码
  prefixIcon: { type: Object }, // 前缀图标 Icon Props
  blurByEnter: { type: Boolean, default: true }
})
const attrs = useAttrs()
const value = defineModel({ type: String, default: '' })
const emit = defineEmits(['blur', 'input', 'enter'])

function handleValueWithTrim() {
  let v = value.value
  if (trim) {
    const vWithTrim = v.trim()
    value.value = vWithTrim
    v = vWithTrim
  }
  return v
}

let enterTime = 0

function handleBlur() {
  let isTriggerByEnter = false

  if (blurByEnter && enterTime > 0) {
    const now = new Date().getTime()
    if (enterTime != 0 && now >= enterTime && now - enterTime < 200) {
      isTriggerByEnter = true
    }
  }

  const val = handleValueWithTrim()
  emit('blur', { value: val, isTriggerByEnter })
}

function handleInput(val) {
  value.value = val

  let v = val
  if (trim) {
    v = v.trim()
  }
  emit('input', { value: v })
}

const inputRef = useTemplateRef('input')
const focus = () => {
  inputRef.value && inputRef.value.focus()
}

function handleEnter() {
  let v = value.value
  if (trim) v = v.trim()
  emit('enter', { value: v })
  if (blurByEnter) {
    enterTime = new Date().getTime()
    setTimeout(() => {
      inputRef.value && inputRef.value.blur()
    }, 0)
  }
}

defineExpose({ focus })
</script>

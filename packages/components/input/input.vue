<template>
  <n-input
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
    @input="handleInput"
    @blur="handleBlur"
  >
    <template v-if="prefixIcon" #prefix>
      <n-icon v-bind="prefixIcon" />
    </template>
  </n-input>
</template>

<script setup>
import { useTemplateRef } from 'vue'
import { NInput, NIcon } from 'naive-ui'
import { countGraphemes } from '../utility/util'

defineOptions({
  name: 'PInput',
  inheritAttrs: false
})

const { trim } = defineProps({
  type: { type: String, default: 'text' },
  size: { type: String, default: 'medium' },
  placeholder: { type: String, default: '请输入' },
  maxlength: { type: Number },
  showCount: { type: Boolean, default: false },
  autofocus: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  clearable: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  trim: { type: Boolean, default: true }, // 默认去除首尾空格
  showPassword: { type: Boolean, default: false }, // 是否显示密码
  prefixIcon: { type: Object } // 前缀图标 Icon Props
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

const inputRef = useTemplateRef('input')
const focus = () => {
  inputRef.value && inputRef.value.focus()
}

defineExpose({ focus })
</script>

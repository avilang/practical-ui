<template>
  <n-checkbox
    :style="attrs.style || ''"
    :checked="value === checkedValue"
    :size="size"
    :disabled="disabled"
    :checked-value="true"
    :unchecked-value="false"
    :value="val"
    :on-update:checked="handleCheckedChange"
    ><slot></slot
  ></n-checkbox>
</template>

<script setup>
import { useAttrs } from 'vue'
import { NCheckbox } from 'naive-ui'
import { debounce } from '../utility/throttle-debounce'

defineOptions({
  name: 'PCheckbox',
  inheritAttrs: false
})

const { checkedValue, uncheckedValue } = defineProps({
  size: { type: String, default: 'medium' },
  disabled: { type: Boolean, default: false },
  checkedValue: { type: [String, Number, Boolean], default: true },
  uncheckedValue: { type: [String, Number, Boolean], default: false },
  val: { type: [String, Number] }
})

const value = defineModel({ type: [String, Number, Boolean] })
const attrs = useAttrs()

const emit = defineEmits(['change'])
const handleCheckedChange = debounce(function (checked) {
  value.value = checked ? checkedValue : uncheckedValue
  // 这里延迟确保 value.value 已经更新
  // 开发中实测这里不延迟打印 value.value 是旧值
  setTimeout(() => {
    emit('change', value.value)
  }, 0)
}, 300)
</script>

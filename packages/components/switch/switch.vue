<template>
  <n-switch
    :class="[attrs.class || '', readonly ? 'p-switch-readonly' : '']"
    :style="attrs.style || ''"
    :size="size"
    :value="value"
    :loading="loading"
    :disabled="disabled"
    :checked-value="checkedValue"
    :unchecked-value="uncheckedValue"
    :on-update:value="handleUpdate"
  >
    <template #checked v-if="checkedText != null && checkedText !== ''">{{ checkedText }}</template>
    <template #unchecked v-if="uncheckedText != null && uncheckedText !== ''">{{ uncheckedText }}</template>
  </n-switch>
</template>

<script setup>
import { useAttrs } from 'vue'
import { NSwitch } from 'naive-ui'
import { debounce } from '../utility/throttle-debounce'

defineOptions({
  name: 'PSwitch',
  inheritAttrs: false
})

const { readonly } = defineProps({
  size: { type: String, default: 'medium' },
  checkedValue: { type: [String, Number, Boolean], default: true },
  uncheckedValue: { type: [String, Number, Boolean], default: false },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  checkedText: { type: String, default: '' },
  uncheckedText: { type: String, default: '' },
  readonly: { type: Boolean, default: false }
})
const value = defineModel({ type: [String, Number, Boolean] })
const attrs = useAttrs()

const emit = defineEmits(['change'])
const handleUpdate = debounce(function (val) {
  if (readonly) return
  value.value = val
  emit('change', val)
}, 300)
</script>

<style>
.n-switch.p-switch-readonly .n-switch__rail {
  cursor: initial;
}
</style>

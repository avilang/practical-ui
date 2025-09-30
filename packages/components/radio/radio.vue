<template>
  <n-radio
    :class="`${attrs.class ? attrs.class : ''}`"
    :style="attrs.style || ''"
    :checked="value === val"
    :size="size"
    :disabled="disabled"
    :value="val"
    :on-update:checked="handleUpdateChecked"
    ><slot></slot
  ></n-radio>
</template>

<script setup>
import { useAttrs } from 'vue'
import { NRadio } from 'naive-ui'
import { debounce } from '../utility/throttle-debounce'

defineOptions({
  name: 'PRadio',
  inheritAttrs: false
})

const { val } = defineProps({
  size: { type: String, default: 'medium' },
  disabled: { type: Boolean, default: false },
  val: { type: [String, Number, Boolean], default: '' }
})

const value = defineModel({ type: [String, Number, Boolean] })
const attrs = useAttrs()

const emit = defineEmits(['change'])
const handleUpdateChecked = debounce(function (checked) {
  if (checked) {
    value.value = val
    emit('change', val)
  }
}, 300)
</script>

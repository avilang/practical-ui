<template>
  <n-button
    attr-type="button"
    :focusable="false"
    :bordered="true"
    :keyboard="false"
    :block="block"
    :size="size"
    :type="type"
    @click="handleClick"
  >
    <slot></slot>
  </n-button>
</template>

<script setup>
import { NButton } from 'naive-ui'
import { debounce } from '../utility/throttle-debounce'

defineOptions({
  name: 'PButton',
  inheritAttrs: false
})

defineProps({
  type: { type: String, default: 'primary' },
  size: { type: String, default: 'medium' },
  block: { type: Boolean, default: false }
})

const emit = defineEmits(['click'])
const handleClick = debounce(function () {
  emit('click')
})
</script>

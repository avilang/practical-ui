<template>
  <n-button attr-type="button" :focusable="false" :size="size" :type="type">
    <slot></slot>
  </n-button>
</template>

<script setup>
import { NButton } from 'naive-ui'

defineOptions({
  name: 'PButton',
  inheritAttrs: false
})

defineProps({
  type: { type: String, default: 'primary' },
  size: { type: String, default: 'medium' }
})
</script>

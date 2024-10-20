<template>
  <n-button
    attr-type="button"
    :focusable="false"
    :bordered="true"
    :keyboard="false"
    :size="size"
    :type="type"
    @click="handleClick"
  >
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

const handleClick = () => {
  console.log('handleClick')
}
</script>

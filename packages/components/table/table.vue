<template>
  <n-table
    :bottom-bordered="bottomBordered"
    :bordered="bordered"
    :single-column="singleColumn"
    :single-line="singleLine"
    :size="size"
    :striped="striped"
  >
    <slot></slot>
  </n-table>
</template>

<script setup>
import { NTable } from 'naive-ui'

defineOptions({
  name: 'PTable',
  inheritAttrs: false
})

defineProps({
  bottomBordered: { type: Boolean, default: true },
  bordered: { type: Boolean, default: false },
  singleColumn: { type: Boolean, default: false },
  singleLine: { type: Boolean, default: true },
  size: { type: String, default: 'small' },
  striped: { type: Boolean, default: false }
})
</script>

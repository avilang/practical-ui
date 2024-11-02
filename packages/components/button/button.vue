<template>
  <n-button
    :class="`${attrs.class ? attrs.class : ''}`"
    :attr-type="attrType"
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
import { useAttrs } from 'vue'
import { NButton } from 'naive-ui'
import { debounce } from '../utility/throttle-debounce'

defineOptions({
  name: 'PButton',
  inheritAttrs: false
})

defineProps({
  type: { type: String, default: 'primary' },
  size: { type: String, default: 'medium' },
  attrType: { type: String, default: 'button' },
  block: { type: Boolean, default: false }
})

const attrs = useAttrs()

const emit = defineEmits(['click'])
const handleClick = debounce(function () {
  emit('click')
})
</script>

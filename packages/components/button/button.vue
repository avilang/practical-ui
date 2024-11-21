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
    :loading="loading"
    :ghost="ghost"
    :secondary="secondary"
    :text="text"
    :disabled="disabled || waiting"
    icon-placement="left"
    @click="handleClick"
  >
    <template v-if="$slots.icon" #icon>
      <slots.icon />
    </template>
    <slots.default v-if="!loading || (loading && !loadingWithoutText)" />
  </n-button>
</template>

<script setup>
import { useAttrs, useSlots } from 'vue'
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
  block: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  ghost: { type: Boolean, default: false },
  secondary: { type: Boolean, default: false },
  text: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  waiting: { type: Boolean, default: false },
  loadingWithoutText: { type: Boolean, default: true }
})

const attrs = useAttrs()
const slots = useSlots()

const emit = defineEmits(['click'])
const handleClick = debounce(function () {
  emit('click')
}, 300)
</script>

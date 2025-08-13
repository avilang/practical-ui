<template>
  <n-checkbox-group :style="attrs.style || ''" :value="value" :on-update:value="handleUpdate"
    ><slot></slot
  ></n-checkbox-group>
</template>

<script setup>
import { useAttrs } from 'vue'
import { NCheckboxGroup } from 'naive-ui'
import { debounce } from '../utility/throttle-debounce'

defineOptions({
  name: 'PCheckboxGroup',
  inheritAttrs: false
})

// Array<string | number>
const value = defineModel({ type: Array, default: [] })
const attrs = useAttrs()

const emit = defineEmits(['change'])
const handleUpdate = debounce(function (val, meta) {
  value.value = val || []
  setTimeout(() => {
    emit('change', value.value, meta)
  }, 0)
}, 300)
</script>

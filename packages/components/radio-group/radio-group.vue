<template>
  <n-radio-group
    :class="`p-radio-group ${attrs.class ? attrs.class : ''}`"
    :style="attrs.style || ''"
    :value="value"
    :on-update:value="handleUpdate"
    ><slot></slot
  ></n-radio-group>
</template>

<script setup>
import { useAttrs } from 'vue'
import { NRadioGroup } from 'naive-ui'
import { debounce } from '../utility/throttle-debounce'

defineOptions({
  name: 'PRadioGroup',
  inheritAttrs: false
})

// string | number | boolean | null
const value = defineModel({ type: [String, Number, Boolean], default: null })
const attrs = useAttrs()

const emit = defineEmits(['change'])
const handleUpdate = debounce(function (val) {
  value.value = val
  emit('change', val)
}, 300)
</script>

<style>
.p-radio-group.n-radio-group > .n-radio {
  margin-right: 16px;
}

.p-radio-group.n-radio-group > .n-radio:last-child {
  margin-right: 0;
}
</style>

<template>
  <n-select
    :class="`${attrs.class ? attrs.class : ''}`"
    :style="width ? `width:${width}` : ''"
    :options="options"
    :value="value"
    :size="size"
    :placeholder="placeholder"
    :disabled="disabled"
    :value-field="valueField"
    :label-field="labelField"
    :clearable="clearable"
    :show-checkmark="showCheckmark"
    :fallback-option="false"
    :consistent-menu-width="true"
    :virtual-scroll="true"
    @update:value="handleUpdateValue"
  >
    <template #empty>
      <n-empty size="small" :description="emptyDescription" />
    </template>
  </n-select>
</template>

<script setup>
import { useAttrs, nextTick } from 'vue'
import { NSelect, NEmpty } from 'naive-ui'
import { debounce } from '../utility/throttle-debounce'

defineOptions({
  name: 'PSelect',
  inheritAttrs: false
})

defineProps({
  size: { type: String, default: 'medium' },
  placeholder: { type: String, default: '请选择' },
  disabled: { type: Boolean, default: false },
  options: { type: Array, default: () => [] },
  clearable: { type: Boolean, default: true },
  showCheckmark: { type: Boolean, default: true },
  valueField: { type: String, default: 'value' },
  labelField: { type: String, default: 'label' },
  width: { type: String, default: '' },
  emptyDescription: { type: String, default: '暂无数据' }
})

const attrs = useAttrs()

const emit = defineEmits(['update', 'change'])
const value = defineModel({ default: null })
const handleUpdateValue = debounce(function (val) {
  if (val !== value.value) {
    nextTick(() => {
      emit('change', val)
    })
  }
  value.value = val
  emit('update', val)
}, 300)
</script>

<template>
  <n-select
    :class="[$attrs.class ? $attrs.class : '']"
    :style="width ? `width:${width}` : ''"
    :options="options"
    :value="value"
    :size="size"
    :menu-size="menuSize"
    :remote="remote"
    :filterable="filterable"
    :loading="loading"
    :placeholder="placeholder"
    :disabled="disabled"
    :value-field="valueField"
    :label-field="labelField"
    :clearable="clearable"
    :show-checkmark="showCheckmark"
    :multiple="multiple"
    :max-tag-count="maxTagCount"
    :keyboard="keyboard"
    :fallback-option="false"
    :consistent-menu-width="true"
    :virtual-scroll="true"
    @update:value="handleUpdateValue"
    @search="handleSearch"
  >
    <template #empty>
      <n-empty class="p-select-empty" :size="size === 'small' ? 'tiny' : 'small'" :description="emptyDescription" />
    </template>
  </n-select>
</template>

<script setup>
import { NSelect, NEmpty } from 'naive-ui'
import { debounce, throttle } from '../utility/throttle-debounce'

defineOptions({
  name: 'PSelect',
  inheritAttrs: false
})

const { throttleSearch } = defineProps({
  size: { type: String, default: 'medium' },
  menuSize: { type: String, default: 'medium' },
  placeholder: { type: String, default: '请选择' },
  disabled: { type: Boolean, default: false },
  options: { type: Array, default: () => [] },
  clearable: { type: Boolean, default: true },
  showCheckmark: { type: Boolean, default: true },
  valueField: { type: String, default: 'value' },
  labelField: { type: String, default: 'label' },
  filterable: { type: Boolean, default: false },
  remote: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  multiple: { type: Boolean, default: false },
  maxTagCount: { type: [Number, String], default: 'responsive' },
  keyboard: { type: Boolean, default: false },
  throttleSearch: { type: Boolean, default: false },
  width: { type: String, default: '' },
  emptyDescription: { type: String, default: '暂无数据' }
})

const emit = defineEmits(['update', 'change', 'search'])
const value = defineModel({ default: null })
const handleUpdateValue = debounce(function (val) {
  const changed = val !== value.value

  value.value = val
  if (changed) emit('change', val)
  emit('update', val)
}, 300)

function doSearch(query) {
  emit('search', query)
}
const handleSearch = throttleSearch ? throttle(doSearch) : doSearch
</script>

<style>
.p-select-empty.n-empty .n-empty__icon + .n-empty__description {
  font-size: 14px;
}
</style>

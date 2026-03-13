<template>
  <n-cascader
    :style="$attrs.style || ''"
    bordered
    :size="size"
    :disabled="disabled"
    :placeholder="placeholder"
    :value="value"
    :options="options"
    :multiple="multiple"
    :cascade="cascade"
    :clearable="clearable"
    :check-strategy="realCheckStrategy"
    :show-path="showPath"
    :remote="remote"
    :filterable="remote ? false : filterable"
    :clear-filter-after-select="clearFilterAfterSelect"
    :menu-props="menuProps"
    :children-field="childrenField"
    :disabled-field="disabledField"
    :value-field="valueField"
    :label-field="labelField"
    :max-tag-count="maxTagCount"
    :virtual-scroll="true"
    :on-load="onLoad"
    @update:value="handleUpdateValue"
  >
    <template #empty>
      <n-empty class="p-cascader-empty" :size="size === 'small' ? 'tiny' : 'small'" :description="emptyDescription" />
    </template>
  </n-cascader>
</template>

<script setup>
import { computed } from 'vue'
import { NCascader, NEmpty } from 'naive-ui'
import { debounce } from '../utility/throttle-debounce'

defineOptions({
  name: 'PCascader',
  inheritAttrs: false
})

const { multiple, checkStrategy } = defineProps({
  size: { type: String, default: 'medium' },
  disabled: { type: Boolean, default: false },
  placeholder: { type: String, default: '请选择' },
  options: { type: Array, default: () => [] },
  multiple: { type: Boolean, default: false },
  menuProps: { type: Object }, // 例：如可以控制菜单样式（宽度等）
  cascade: { type: Boolean, default: true },
  clearable: { type: Boolean, default: false },
  showPath: { type: Boolean, default: false },
  remote: { type: Boolean, default: false },
  filterable: { type: Boolean, default: false },
  clearFilterAfterSelect: { type: Boolean, default: true },
  onLoad: { type: Function },
  checkStrategy: { type: String },
  childrenField: { type: String, default: 'children' },
  disabledField: { type: String, default: 'disabled' },
  valueField: { type: String, default: 'value' },
  labelField: { type: String, default: 'label' },
  maxTagCount: { type: [Number, String], default: 'responsive' },
  emptyDescription: { type: String, default: '暂无数据' }
})

const realCheckStrategy = computed(() => {
  return checkStrategy || (multiple ? 'parent' : 'child')
})

const emit = defineEmits(['update', 'change'])
const value = defineModel({ default: null })
const handleUpdateValue = debounce(function (val) {
  let changed = false
  if (multiple) {
    changed = val.length !== value.value?.length
  } else {
    changed = val !== value.value
  }

  value.value = val

  if (changed) emit('change', val)
  emit('update', val)
}, 300)
</script>

<style>
.p-cascader-empty.n-empty .n-empty__icon + .n-empty__description {
  font-size: 14px;
}
</style>

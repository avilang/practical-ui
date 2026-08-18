<template>
  <n-tree-select
    :class="[$attrs.class ? $attrs.class : '']"
    :style="$attrs.style || ''"
    :value="value"
    :size="size"
    :disabled="disabled"
    :placeholder="placeholder"
    :options="options"
    :children-field="childrenField"
    :key-field="keyField"
    :label-field="labelField"
    :disabled-field="disabledField"
    :multiple="multiple"
    :cascade="cascade"
    :check-strategy="realCheckStrategy"
    :max-tag-count="maxTagCount"
    :default-expand-all="defaultExpandAll"
    :loading="loading"
    :show-path="showPath"
    :clearable="clearable"
    :indent="indent"
    :filterable="filterable"
    :filter="filter"
    :checkable="multiple"
    :consistent-menu-width="true"
    :virtual-scroll="true"
    :show-line="false"
    :clear-filter-after-select="true"
    @update:value="handleUpdateValue"
  >
    <template #empty>
      <n-empty
        class="p-tree-select-empty"
        :size="size === 'small' ? 'tiny' : 'small'"
        :description="emptyDescription"
      />
    </template>
  </n-tree-select>
</template>

<script setup>
import { computed } from 'vue'
import { NTreeSelect, NEmpty } from 'naive-ui'
import { debounce } from '../utility/throttle-debounce'

defineOptions({
  name: 'PTreeSelect',
  inheritAttrs: false
})

const { multiple, checkStrategy } = defineProps({
  size: { type: String, default: 'medium' },
  disabled: { type: Boolean, default: false },
  placeholder: { type: String, default: '请选择' },
  options: { type: Array, default: () => [] },
  childrenField: { type: String, default: 'children' },
  keyField: { type: String, default: 'key' },
  labelField: { type: String, default: 'label' },
  disabledField: { type: String, default: 'disabled' },
  multiple: { type: Boolean, default: false },
  cascade: { type: Boolean, default: true },
  checkStrategy: { type: String },
  maxTagCount: { type: [Number, String], default: 'responsive' },
  defaultExpandAll: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  showPath: { type: Boolean, default: false },
  clearable: { type: Boolean, default: false },
  indent: { type: Number, default: 18 },
  filterable: { type: Boolean, default: true },
  filter: { type: Function },
  emptyDescription: { type: String, default: '暂无数据' }
})

const realCheckStrategy = computed(() => {
  return checkStrategy || (multiple ? 'parent' : 'all')
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
.p-tree-select-empty.n-empty .n-empty__icon + .n-empty__description {
  font-size: 14px;
}
</style>

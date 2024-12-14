<template>
  <n-pagination
    class="p-pagination"
    size="medium"
    :display-order="['pages', 'size-picker', 'quick-jumper']"
    :simple="simple"
    :item-count="total"
    :page="page"
    :page-size="pageSize"
    :page-slot="pageSlot"
    :show-quick-jumper="showQuickJumper"
    :show-size-picker="showSizePicker"
    :page-sizes="pageSizes"
    :show-quick-jump-dropdown="false"
    :on-update:page="handleUpdatePage"
    :on-update:page-size="handleUpdatePageSize"
    :style="attrs.style"
  >
    <template #prefix="{ itemCount }" v-if="!simple">共 {{ itemCount }} 条记录</template>
    <template #suffix v-if="showQuickJumper && !simple">页</template>
  </n-pagination>
</template>

<script setup>
import { useAttrs } from 'vue'
import { NPagination } from 'naive-ui'

defineOptions({
  name: 'PPagination',
  inheritAttrs: false
})

defineProps({
  total: { type: Number },
  pageSlot: { type: Number, default: 9 },
  showQuickJumper: { type: Boolean, default: true },
  showSizePicker: { type: Boolean, default: true },
  pageSizes: { type: Array, default: () => [10, 20, 30, 40] },
  simple: { type: Boolean, default: false }
})

const attrs = useAttrs()
const page = defineModel('page', { type: Number, default: 1 })
const pageSize = defineModel('pageSize', { type: Number, default: 10 })
const emit = defineEmits(['changePage', 'changePageSize'])

function handleUpdatePage(current) {
  page.value = current
  emit('changePage', current)
}

function handleUpdatePageSize(size) {
  pageSize.value = size
  emit('changePageSize', size)
}
</script>

<style>
.n-pagination.p-pagination {
  justify-content: end;
}
.n-pagination.p-pagination .n-pagination-prefix {
  margin-right: 0;
}
</style>

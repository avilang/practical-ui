<template>
  <div class="p-search" ref="search">
    <div v-for="(listPart, i) in list" :key="i" class="p-search-lilne">
      <search-item
        v-for="(item, j) in listPart"
        ref="searchItem"
        :key="item.field || j"
        :item="item"
        :doSearch="doSearch"
        :doReset="doReset"
        :updateSearchData="updateSearchData"
        :style="layout.singleLine && !item._isActionItem ? `width: ${itemWidth}px` : ''"
      />
    </div>
  </div>
</template>

<script setup>
import { useTemplateRef, onMounted, ref } from 'vue'
import SearchItem from './search-item.vue'

defineOptions({
  name: 'PSearch',
  inheritAttrs: false
})

const { itemWidth, model } = defineProps({
  model: { type: Array, default: () => [] },
  itemWidth: { type: Number, default: 280 },
  visibleLine: { type: Number, default: 2 }
})

const searchData = ref({})
const initSearchData = () => {
  const data = {}
  model.forEach((item) => {
    if (item.slot) return
    if (!item.field) return
    if (item.defaultValue !== null) {
      data[item.field] = item.defaultValue
    }
  })
  searchData.value = data
}
initSearchData()

const list = ref([])
const layout = ref({})
const itemAction = { _isActionItem: true, width: 150 } // width 为操作项的宽度
const searchRef = useTemplateRef('search')

function generateLayout() {
  if (!searchRef.value) return
  if (!model || model.length === 0) return

  const searchElemWidth = Math.floor(searchRef.value.getBoundingClientRect().width)
  if (searchElemWidth >= itemWidth * model.length + itemAction.width) {
    // 只有一行
    list.value = [[...model, itemAction]]
    layout.value = { singleLine: true }
  }
}

onMounted(() => {
  generateLayout()
})

function updateSearchData(field, value) {
  if (!field) return
  searchData.value[field] = value
}

function doSearch() {
  console.log('search', searchData.value)
}

const searchItemRef = useTemplateRef('searchItem')
function doReset() {
  searchItemRef.value.forEach((searchItem) => {
    searchItem.reset()
  })
  initSearchData()
}
</script>

<style>
.p-search {
  width: 100%;
  max-width: 100%;
  min-height: 34px;
}

.p-search-lilne {
  display: flex;
  align-items: center;
}
</style>

<template>
  <div class="p-search" ref="search">
    <div v-for="(listPart, i) in list" :key="i" class="p-search-lilne" :style="i > 0 ? 'margin-top:12px' : ''">
      <search-item
        v-for="(item, j) in listPart"
        ref="searchItem"
        :key="item.field || j"
        :labelWidth="labelWidth"
        :item="item"
        :lastItemForMulti="layout.multiLine && !item._isActionItem && j === listPart.length - 1"
        :searchData="searchData"
        :doSearch="doSearch"
        :doReset="doReset"
        :updateSearchData="updateSearchData"
        :style="
          layout.singleLine && !item._isActionItem ? `width: ${searchItemWidth}px` : layout.multiLine ? 'flex:1' : ''
        "
      />
    </div>
  </div>
</template>

<script setup>
import { useTemplateRef, onMounted, ref } from 'vue'
import useEventListener from '../composables/useEventListener'
import { throttle } from '../utility/throttle-debounce'
import SearchItem from './search-item.vue'

defineOptions({
  name: 'PSearch',
  inheritAttrs: false
})

const { itemWidth, model, visibleLine, labelWidth } = defineProps({
  model: { type: Array, default: () => [] },
  itemWidth: { type: Number, default: 268 },
  labelWidth: { type: Number, default: 60 },
  visibleLine: { type: Number, default: -1 }
})
const searchItemWidth = Math.max(itemWidth, 200)

const searchData = ref({})
const initSearchData = () => {
  const data = {}
  model.forEach((item) => {
    if (item.slot) return
    if (!item.field) return
    if (Object.hasOwn(item, 'defaultValue')) {
      data[item.field] = item.defaultValue
    }
  })
  searchData.value = data
}
initSearchData()

const list = ref([])
const layout = ref({})
const itemAction = { _isActionItem: true, width: 170 } // width 为操作项的宽度
const itemEmpty = { _isEmptyItem: true } // 占位项
const searchRef = useTemplateRef('search')

function generateLayout() {
  if (!searchRef.value) return
  if (!model || model.length === 0) return

  const searchElemWidth = Math.floor(searchRef.value.getBoundingClientRect().width)

  // 只有一行
  if (searchElemWidth >= searchItemWidth * model.length + itemAction.width) {
    list.value = [[...model, itemAction]]
    layout.value = { singleLine: true }
    return
  }

  const itemLineCount = Math.floor(searchElemWidth / searchItemWidth)
  // 多于一行且没有更多
  if (visibleLine <= 0) {
    const targetList = []
    model.forEach((item, index) => {
      if (index % itemLineCount === 0) {
        targetList.push([])
      }
      targetList[targetList.length - 1].push(item)
    })

    const lastElemLength = targetList[targetList.length - 1].length
    if (lastElemLength === itemLineCount) {
      targetList.push([itemAction])
    } else {
      // 元素个数少于 itemLineCount
      let i = 0
      const missLength = itemLineCount - lastElemLength
      while (i < missLength) {
        if (i === missLength - 1) {
          targetList[targetList.length - 1].push(itemAction)
        } else {
          targetList[targetList.length - 1].push(itemEmpty)
        }
        i += 1
      }
    }

    list.value = targetList
    layout.value = { multiLine: true }
    return
  }
}

onMounted(() => {
  generateLayout()
  useEventListener(
    window,
    'resize',
    throttle(function () {
      generateLayout()
    })
  )
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

<template>
  <div class="p-search" ref="search">
    <div v-for="(listPart, i) in list" :key="i" class="p-search-lilne" :style="i > 0 ? 'margin-top:12px' : ''">
      <search-item
        v-for="(item, j) in listPart"
        ref="searchItem"
        :key="item.field || j"
        :oneLineCondition="oneLineCondition"
        :labelWidth="realLabelWidth"
        :showColon="showColon"
        :item="item"
        :lastItemForMulti="layout.multiLine && !item._isActionItem && j === listPart.length - 1"
        :searchData="searchData"
        :doSearch="doSearch"
        :doReset="doReset"
        :doChange="handleChange"
        :updateSearchData="updateSearchData"
        :style="
          layout.singleLine && !item._isActionItem ? `width: ${searchItemWidth}px` : layout.multiLine ? 'flex:1' : ''
        "
      />
    </div>
  </div>
</template>

<script setup>
import { useTemplateRef, onMounted, ref, nextTick, computed } from 'vue'
import useEventListener from '../composables/useEventListener'
import { throttle } from '../utility/throttle-debounce'
import SearchItem from './search-item.vue'

defineOptions({
  name: 'PSearch'
})

const { itemWidth, model, visibleLine, labelWidth, maxLabelWidth, showColon, showResetBtnIcon } = defineProps({
  model: { type: Array, default: () => [] },
  itemWidth: { type: Number, default: 268 },
  labelWidth: { type: Number },
  maxLabelWidth: { type: Number, default: 87 },
  visibleLine: { type: Number, default: -1 },
  showColon: { type: Boolean, default: true },
  showResetBtnIcon: { type: Boolean, default: false }
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
    } else if (item.type === 'input') {
      data[item.field] = ''
    }
  })
  searchData.value = data
}
initSearchData()

const list = ref([])
const layout = ref({})
const itemAction = { _isActionItem: true, width: 170, showResetBtnIcon } // width 为操作项的宽度
const itemEmpty = { _isEmptyItem: true } // 占位项
const searchRef = useTemplateRef('search')

// 只有一行或存在两行且第二行只有操作按钮的情况下为真
const oneLineCondition = computed(() => {
  return layout.value.singleLine || (list.value.length === 2 && list.value[1].length === 1)
})
const realLabelWidth = computed(() => {
  let ilableWidth = labelWidth || 59
  ilableWidth = Math.min(ilableWidth, maxLabelWidth)

  if (oneLineCondition.value === false) return ilableWidth

  return maxLabelWidth
})

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

const emit = defineEmits(['search', 'reset', 'change'])

/**
 * 过滤对象中的空值
 * @param {Object} obj - 需要处理的对象
 * @param {boolean} [strictMode=false] - 是否开启严格模式（同时过滤假值）
 * @returns {Object} 过滤后的新对象
 */
function filterEmptyValues(obj, strictMode = false) {
  // 容错处理非对象输入
  if (typeof obj !== 'object' || obj === null) return {}

  // 定义空值检测逻辑
  const isConsideredEmpty = (value) => {
    if (strictMode) {
      // 严格模式：过滤所有假值 (false, 0, NaN 等)
      return !value && value !== false && value !== 0
    }
    // 默认模式：仅过滤 null/undefined/空字符串
    return value === null || value === undefined || value === ''
  }

  // eslint-disable-next-line no-unused-vars
  return Object.fromEntries(Object.entries(obj).filter(([_, value]) => !isConsideredEmpty(value)))
}

function getSearchData() {
  return filterEmptyValues(searchData.value)
}

const searchItemRef = useTemplateRef('searchItem')
function resetSearchData() {
  searchItemRef.value.forEach((searchItem) => {
    searchItem.reset()
  })
  initSearchData()
  return getSearchData()
}

// 用于判断change事件是否由用户通过点击操作按钮触发的
let actionTime = 0

function doSearch() {
  actionTime = new Date().getTime()
  emit('search', getSearchData(), { type: 'search' })
}

function doReset() {
  const data = resetSearchData()
  nextTick(() => {
    actionTime = new Date().getTime()
    emit('reset', data, { type: 'reset' })
  })
}

// searchData 变化时候触发
// 对于 input 组件检测时机是失去焦点后
function handleChange() {
  setTimeout(() => {
    let isActionTriggered = false
    const now = new Date().getTime()

    if (actionTime != 0 && now >= actionTime && now - actionTime < 200) {
      isActionTriggered = true
    }
    emit('change', getSearchData(), { type: 'change', isActionTriggered })
  }, 0)
}

defineExpose({ getSearchData, resetSearchData })
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

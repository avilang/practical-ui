<template>
  <div
    :class="[
      'p-search-item',
      item._isActionItem ? 'p-search-item-action' : '',
      lastItemForMulti ? 'p-search-item-last' : ''
    ]"
  >
    <template v-if="!item._isActionItem && !item._isEmptyItem">
      <div class="p-search-item-label">
        <n-ellipsis
          :style="
            oneLineCondition
              ? `max-width: ${labelWidth - 1}px`
              : { boxSizing: 'border-box', width: `${labelWidth - 1}px` }
          "
          >{{ item.label }}</n-ellipsis
        ><span v-if="showColon">：</span>
      </div>
      <div class="p-search-item-content">
        <component
          v-if="item.type === 'input'"
          :is="Input"
          v-model="value"
          v-bind.prop="item.props"
          @blur="handleInputBlur"
        />
        <component
          v-if="item.type === 'select'"
          :is="Select"
          v-model="value"
          v-bind.prop="item.props"
          @change="handleChangeSelect"
        />
      </div>
    </template>
    <template v-if="item._isActionItem">
      <s-button style="width: 80px" @click="handleSearch">
        <template #icon
          ><n-icon size="20" color="#ffffff"
            ><svg
              t="1737784979409"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6537"
              width="200"
              height="200"
            >
              <path
                d="M446.112323 177.545051c137.567677 0.219798 252.612525 104.59798 266.162424 241.493333 13.562828 136.895354-78.778182 261.818182-213.617777 289.008485-134.852525 27.203232-268.386263-52.156768-308.945455-183.608889s25.018182-272.252121 151.738182-325.779394A267.235556 267.235556 0 0 1 446.112323 177.545051m0-62.060607c-182.794343 0-330.989899 148.195556-330.989899 330.989899s148.195556 330.989899 330.989899 330.989899 330.989899-148.195556 330.989899-330.989899-148.195556-330.989899-330.989899-330.989899z m431.321212 793.341415a30.849293 30.849293 0 0 1-21.94101-9.102223l-157.220202-157.220202c-11.752727-12.179394-11.584646-31.534545 0.37495-43.50707 11.972525-11.972525 31.327677-12.140606 43.494141-0.37495l157.220202 157.220202a31.036768 31.036768 0 0 1 6.723232 33.810101 31.004444 31.004444 0 0 1-28.651313 19.174142z m0 0"
                p-id="6538"
              ></path></svg></n-icon></template
        >搜索</s-button
      >
      <s-button style="margin-left: 10px; width: 80px" type="default" @click="handleReset">
        <template #icon>
          <n-icon size="18">
            <svg
              t="1737871878167"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6743"
              width="200"
              height="200"
            >
              <path
                d="M885.58 554.65c-22.86 0-41.39-18.53-41.39-41.39V182.17c0-22.86 18.53-41.39 41.39-41.39s41.39 18.53 41.39 41.39v331.09c-0.01 22.86-18.54 41.39-41.39 41.39zM140.62 885.74c-22.86 0-41.39-18.53-41.39-41.39V513.26c0-22.86 18.53-41.39 41.39-41.39s41.39 18.53 41.39 41.39v331.09c0 22.86-18.53 41.39-41.39 41.39z"
                p-id="6744"
              ></path>
              <path
                d="M513.1 927.12c-228.21 0-413.86-185.65-413.86-413.86 0-22.86 18.53-41.39 41.39-41.39s41.39 18.53 41.39 41.39c0 182.56 148.53 331.09 331.09 331.09 86.23 0 167.89-32.98 229.93-92.86 16.45-15.82 42.66-15.42 58.52 1.05 15.86 16.45 15.4 42.64-1.05 58.52-77.57 74.84-179.64 116.06-287.41 116.06zM885.6 554.65c-22.86 0-41.39-18.53-41.39-41.39 0-182.56-148.53-331.09-331.09-331.09-90.65 0-175.27 35.93-238.25 101.16-15.82 16.51-42.07 16.95-58.5 1.03-16.45-15.86-16.91-42.07-1.03-58.5C294.04 144.3 399.81 99.4 513.12 99.4c228.21 0 413.86 185.65 413.86 413.86 0 22.86-18.53 41.39-41.38 41.39z"
                p-id="6745"
              ></path>
            </svg>
          </n-icon> </template
        >重置</s-button
      >
    </template>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { NIcon, NEllipsis } from 'naive-ui'
import { PInput as Input } from '../input/index.js'
import { PSelect as Select } from '../select/index.js'
import { PButton as SButton } from '../button/index.js'

const { item, searchData, doSearch, doReset, doChange, updateSearchData } = defineProps({
  lastItemForMulti: { type: Boolean, default: false }, // 多行且每行的最后一个搜索条件
  oneLineCondition: { type: Boolean, required: true },
  showColon: { type: Boolean, default: true },
  item: { type: Object, required: true },
  labelWidth: { type: Number, required: true },
  searchData: { type: Object, required: true },
  doSearch: { type: Function, required: true },
  doReset: { type: Function, required: true },
  doChange: { type: Function, required: true },
  updateSearchData: { type: Function, required: true }
})
const value = ref(item.field ? searchData[item.field] : void 0)

function handleInputBlur({ value }) {
  const changed = value !== searchData[item.field]
  updateSearchData(item.field, value)
  if (changed) {
    doChange()
  }
}

function handleChangeSelect(value) {
  updateSearchData(item.field, value)
  doChange()
}

function handleSearch() {
  document.activeElement && document.activeElement.blur()
  nextTick(() => {
    doSearch()
  })
}

function handleReset() {
  document.activeElement && document.activeElement.blur()
  nextTick(() => {
    doReset()
  })
}

function reset() {
  if (item._isActionItem) return
  if (!item.field) return

  value.value = item.defaultValue
}

defineExpose({ reset })
</script>

<style>
.p-search-item {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 24px;
}

.p-search-item.p-search-item-action {
  flex: 1;
  justify-content: end;
  padding-right: 0;
}

.p-search-item.p-search-item-last {
  padding-right: 0;
}

.p-search-item .p-search-item-label {
  margin-right: 8px;
  text-align: right;
  padding-left: 1px;
}

.p-search-item-content {
  flex: 1;
}
</style>

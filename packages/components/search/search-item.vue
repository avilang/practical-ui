<template>
  <div :class="['p-search-item', item._isActionItem ? 'p-search-item-action' : '']">
    <template v-if="!item._isActionItem">
      <span>{{ item.label }}</span>
      <div class="p-search-item-content">
        <component
          v-if="item.type === 'input'"
          :is="Input"
          v-model="value"
          v-bind.prop="item.props"
          @input="handleInput"
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
    <template v-else>
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
      <s-button style="margin-left: 10px; width: 60px" type="default" @click="handleReset">重置</s-button>
    </template>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { NIcon } from 'naive-ui'
import { PInput as Input } from '../input/index.js'
import { PSelect as Select } from '../select/index.js'
import { PButton as SButton } from '../button/index.js'

const { item, doSearch, doReset, updateSearchData } = defineProps({
  item: { type: Object, required: true },
  doSearch: { type: Function, required: true },
  doReset: { type: Function, required: true },
  updateSearchData: { type: Function, required: true }
})
const value = ref(item.defaultValue)

function handleInput({ value }) {
  updateSearchData(item.field, value)
}

function handleChangeSelect(value) {
  updateSearchData(item.field, value)
}

function handleSearch() {
  nextTick(() => {
    doSearch()
  })
}

function handleReset() {
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
  padding-right: 16px;
}

.p-search-item.p-search-item-action {
  flex: 1;
  justify-content: end;
  padding-right: 0;
}

.p-search-item > span {
  margin-right: 8px;
}

.p-search-item-content {
  flex: 1;
}
</style>

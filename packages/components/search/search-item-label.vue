<template>
  <div :class="{ 'p-search-item-label': true, 'p-search-item-colon-label': showColon }">
    <span :class="['p-search-item-label-wraper']" :style="style" :title="isOverflow ? label : ''">
      <span ref="labelText" class="p-search-item-label-wraper__text">{{ label }}</span>
    </span>
    <span v-if="showColon" style="vertical-align: middle">：</span>
  </div>
</template>

<script setup>
import { computed, onMounted, useTemplateRef, ref } from 'vue'

const { width, oneLineCondition } = defineProps({
  label: { type: String },
  width: { type: Number },
  oneLineCondition: { type: Boolean },
  showColon: { type: Boolean }
})
const iW = width - 1
const isOverflow = ref(false)
const style = computed(() => {
  const result = oneLineCondition ? { maxWidth: `${iW}px` } : { boxSizing: 'border-box', width: `${iW}px` }
  if (isOverflow.value) {
    result.userSelect = 'none'
    result['-webkit-user-select'] = 'none'
  }
  return result
})

const labelTextRef = useTemplateRef('labelText')
onMounted(() => {
  isOverflow.value = labelTextRef.value.offsetWidth > iW
})
</script>

<style>
.p-search-item-label {
  margin-right: 8px;
  text-align: right;
  padding-left: 1px;
}

.p-search-item-label.p-search-item-colon-label {
  margin-right: 1px;
}

.p-search-item-label-wraper {
  display: inline-block;
  direction: rtl;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: middle;
}

.p-search-item-label-wraper__text {
  direction: ltr;
  unicode-bidi: embed;
}
</style>

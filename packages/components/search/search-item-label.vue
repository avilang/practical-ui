<template>
  <div :class="{ 'p-search-item-label': true, 'p-search-item-colon-label': showColon }">
    <span :class="['p-search-item-label-wraper']" :style="style" :title="isOverflow ? label : ''">
      <span ref="labelText" class="p-search-item-label-wraper__text">{{ label }}</span>
    </span>
    <span v-if="showColon" style="vertical-align: middle">：</span>
  </div>
</template>

<script setup>
import { onMounted, useTemplateRef, ref, watch } from 'vue'

const { width, oneLineCondition } = defineProps({
  label: { type: String },
  width: { type: Number },
  oneLineCondition: { type: Boolean },
  showColon: { type: Boolean }
})

const isOverflow = ref(false)
const style = ref({})
const labelTextRef = useTemplateRef('labelText')

function setStyle() {
  const iW = width - 1
  const overflow = labelTextRef.value.offsetWidth > iW
  const result = oneLineCondition ? { maxWidth: `${iW}px` } : { boxSizing: 'border-box', width: `${iW}px` }

  if (overflow) {
    result.userSelect = 'none'
    result['-webkit-user-select'] = 'none'
  }
  isOverflow.value = overflow
  style.value = result
}

watch(
  [() => width, () => oneLineCondition],
  () => {
    setStyle()
  },
  { immediate: false }
)

onMounted(() => {
  setStyle()
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

<template>
  <span ref="label" :class="['p-search-item-label-wraper']" :style="style">
    <span class="p-search-item-label-wraper__text">{{ label }}</span>
  </span>
</template>

<script setup>
import { computed } from 'vue'

const { width, oneLineCondition } = defineProps({
  label: { type: String },
  width: { type: Number },
  oneLineCondition: { type: Boolean }
})
const style = computed(() => {
  return oneLineCondition ? `max-width: ${width - 1}px` : { boxSizing: 'border-box', width: `${width - 1}px` }
})

// const labelRef = useTemplateRef('label')
// const style = ref('')
// onMounted(() => {
//   const iWidth = parseInt(width) - 10 - (showRequireMark ? 14 : 0)
//   if (labelRef.value.offsetWidth > iWidth) {
//     style.value = `width: ${iWidth}px; user-select: none; -webkit-user-select: none;`
//   }
// })
</script>

<style>
.p-search-item-label-wraper {
  display: block;
  direction: rtl;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.p-search-item-label-wraper__text {
  direction: ltr;
  unicode-bidi: embed;
}
</style>

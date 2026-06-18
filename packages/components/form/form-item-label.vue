<template>
  <span ref="label" :class="['p-form-item-label']" :style="style">
    <span class="p-form-item-label__text">{{ label }}</span>
  </span>
</template>

<script setup>
import { useTemplateRef, onMounted, ref } from 'vue'

const { width, showRequireMark } = defineProps({
  label: { type: String },
  width: { type: [Number, String] },
  showRequireMark: { type: Boolean }
})

const labelRef = useTemplateRef('label')
const style = ref('')
onMounted(() => {
  const iWidth = parseInt(width) - 10 - (showRequireMark ? 14 : 0)
  if (labelRef.value.offsetWidth > iWidth) {
    style.value = `width: ${iWidth}px; user-select: none; -webkit-user-select: none;`
  }
})
</script>

<style>
.p-form-item-label {
  display: block;
  direction: rtl;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.p-form-item-label__text {
  direction: ltr;
  unicode-bidi: embed;
}
</style>

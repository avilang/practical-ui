<template>
  <p-in-button v-if="negativeText" size="xs" type="default" :default-type="type" @click="handleNegative">{{
    negativeText
  }}</p-in-button>
  <p-in-button v-if="positiveText" size="xs" :type="type" @click="handlePositive">{{ positiveText }}</p-in-button>
</template>

<script setup>
import { PButton as PInButton } from '../button/index.js'

const { onClose, onPositiveClick, onNegativeClick } = defineProps({
  positiveText: { type: String, default: '' },
  negativeText: { type: String, default: '' },
  type: { type: String, default: 'primary' },
  onClose: { type: Function },
  onPositiveClick: { type: Function },
  onNegativeClick: { type: Function }
})

function handleNegative() {
  onClose && onClose()
  onNegativeClick && onNegativeClick()
}

function handlePositive() {
  onClose && onClose()
  onPositiveClick && onPositiveClick()
}
</script>

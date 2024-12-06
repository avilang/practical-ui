<template>
  <p-in-button
    v-if="negativeText"
    size="small"
    type="default"
    :default-type="type"
    :disabled="loading"
    @click="handleNegative"
    >{{ negativeText }}</p-in-button
  >
  <p-in-button
    v-if="positiveText"
    size="small"
    :type="type"
    :loading="loading"
    :loadingWithoutText="false"
    @click="handlePositive"
    >{{ positiveText }}</p-in-button
  >
</template>

<script setup>
import { PButton as PInButton } from '../../button/index.js'
import { isPromise } from '../../utility/util.js'
import useDelayLoading from '../useDelayLoading.js'

const { onClose, onPositiveClick, onNegativeClick, onLoading } = defineProps({
  positiveText: { type: String, default: '' },
  negativeText: { type: String, default: '' },
  type: { type: String, default: 'primary' },
  onClose: { type: Function, default: () => {} },
  onPositiveClick: { type: Function },
  onNegativeClick: { type: Function },
  onLoading: { type: Function }
})

const { loading, waiting, setLoadingStatus } = useDelayLoading()
function callActionFn(fn, type) {
  const value = fn({
    done: function () {
      return setLoadingStatus(false).then(() => {
        onLoading(false)
      })
    }
  })
  if (value === false) {
    return
  } else if (isPromise(value)) {
    if (type === 'positiveClick') {
      setLoadingStatus(true)
      onLoading(true)
    }
    return
  } else {
    onClose()
  }
}

function handleNegative() {
  if (waiting.value) return
  if (onNegativeClick) {
    callActionFn(onNegativeClick, 'negativeClick')
  } else {
    onClose()
  }
}

function handlePositive() {
  if (waiting.value) return
  if (onPositiveClick) {
    callActionFn(onPositiveClick, 'positiveClick')
  } else {
    onClose()
  }
}
</script>

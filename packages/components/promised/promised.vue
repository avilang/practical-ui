<template>
  <div :style="contentStyle">
    <slot
      v-if="
        (!loading && !isPending && !error && !equalEmptyForData(data)) ||
        (isPending && waiting && !recentError && !error && !equalEmptyForData(data))
      "
      :data="data"
    ></slot>
    <div v-if="loading" class="p-promised-loading">
      <n-spin :size="size" :style="spinStyle" />
      <div class="p-promised-loading-mask"></div>
    </div>
    <n-empty v-if="!loading && !isPending && !error && equalEmptyForData(data)" :description="emptyDesc" size="medium">
      <template #extra v-if="$slots.emptyExtra">
        <slot name="emptyExtra"></slot>
      </template>
    </n-empty>
    <n-empty v-if="!loading && !isPending && error" :description="error.message || errorDefaultDesc" size="medium" />
  </div>
</template>

<script setup>
import { toRef, computed, watch, ref } from 'vue'
import { usePromise } from 'vue-promised'
import { NSpin, NEmpty } from 'naive-ui'
import useDelayLoading from '../composables/useDelayLoading.js'

defineOptions({
  name: 'PPromised',
  inheritAttrs: false
})

// 在开发环境下 promise 若 reject 时，会在控制台打印如下错误信息
// [Vue warn]: Unhandled error during execution of watcher getter
// 若想隐藏该错误信息，考虑使用 app.config.warnHandler 来处理
const { promise, loadingSize, loadingTop, dataField } = defineProps({
  promise: { default: null },
  dataField: { type: String },
  loadingSize: { type: String, default: 'medium' },
  loadingTop: { type: Number },
  emptyDesc: { type: String, default: '暂无数据' },
  errorDefaultDesc: { type: String, default: '系统异常' },
  contentStyle: { type: String, default: 'position:relative; min-height:72px;' } //  内容的最小高度，避免 loading/empty 状态下高度不确定导致抖动
})

const size = computed(() => {
  return ['small', 'medium', 'large'].includes(loadingSize) ? loadingSize : 'medium'
})
const spinStyle = computed(() => {
  const style = { position: 'absolute', left: '50%', zIndex: 2 }

  if (loadingTop == null) {
    style.top = '50%'
  } else {
    style.top = `${loadingTop}px`
  }

  if (size.value === 'small') {
    style.marginLeft = '-14px'
    if (loadingTop == null) style.marginTop = '-14px'
  } else if (size.value === 'medium') {
    style.marginLeft = '-17px'
    if (loadingTop == null) style.marginTop = '-17px'
  } else if (size.value === 'large') {
    style.marginLeft = '-20px'
    if (loadingTop == null) style.marginTop = '-20px'
  }

  return style
})
const promiseRef = toRef(() => promise)
const { data, error, isPending, isDelayElapsed, isResolved, isRejected } = usePromise(promiseRef, 0)

const { loading, waiting } = useDelayLoading()
watch(
  () => {
    return isPending.value && isDelayElapsed.value
  },
  (pending) => {
    waiting.value = pending
  },
  { immediate: false }
)

const recentError = ref(false)
watch(isRejected, (v) => {
  if (v === true && recentError.value === false) {
    recentError.value = v
  }
})
watch(isResolved, (v) => {
  if (v === true && recentError.value === true) {
    recentError.value = false
  }
})

function equalEmpty(value) {
  let result = true
  if (typeof value === 'object') {
    for (const key in value) {
      if (typeof value[key] === 'object') {
        result = equalEmpty(value[key])
      } else {
        result = value[key] === '' || value[key] === null || value[key] === void 0
      }
      if (result === false) {
        break
      }
    }
    return result
  } else {
    return value === '' || value === null || value === void 0
  }
}

function equalEmptyForData(data) {
  if (data == null || data === '') return true
  return equalEmpty(dataField ? data[dataField] : data)
}
</script>

<style>
.p-promised-loading {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}

.p-promised-loading .p-promised-loading-mask {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0.5;
}
</style>

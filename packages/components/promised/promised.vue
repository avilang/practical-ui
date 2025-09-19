<template>
  <div :class="attrs.class ? attrs.class : ''" :style="contentStyle">
    <slot
      v-if="
        (!loading && !isPending && !error && !equalEmptyForData(data)) ||
        (isPending && waiting && !recentError && !error && !equalEmptyForData(data)) ||
        (isEmpty && defaultSlotAsEmpty)
      "
      :data="data"
      :isEmpty="isEmpty"
    ></slot>
    <div v-if="loading" class="p-promised-loading">
      <n-spin :size="size" :style="spinStyle" />
      <div class="p-promised-loading-mask"></div>
    </div>
    <template v-if="isEmpty && !defaultSlotAsEmpty">
      <n-empty v-if="!$slots.emptyCustomize" :class="nilClassName" :description="emptyDesc" size="medium">
        <template #extra v-if="$slots.emptyExtra">
          <slot name="emptyExtra"></slot>
        </template>
      </n-empty>
      <template v-else>
        <slot name="emptyCustomize"></slot>
      </template>
    </template>
    <n-empty
      v-if="!loading && !isPending && error"
      :class="nilClassName"
      :description="error.message || errorDefaultDesc"
      size="medium"
    />
  </div>
</template>

<script setup>
import { toRef, computed, watch, ref, useAttrs } from 'vue'
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
// READING: https://github.com/posva/vue-promised/pull/40 (promise 重置为null时，不会恢复初始状态，应该是该 PR，持续关注)
const { promise, loadingSize, loadingTop, dataField, nilType, nilClass } = defineProps({
  promise: { default: null },
  dataField: { type: String },
  loadingSize: { type: String, default: 'medium' },
  loadingTop: { type: Number },
  emptyDesc: { type: String, default: '暂无数据' },
  errorDefaultDesc: { type: String, default: '系统异常' },
  defaultSlotAsEmpty: { type: Boolean, default: false },
  nilType: { type: String }, // 控制 empty 和 error 状态下的样式
  nilClass: { type: String }, // 定义 empty 和 error 状态下的 class 名
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
const nilClassName = computed(() => {
  let className = (nilClass || '').trim()
  if (nilType === 'border') className += ' p-promised-empty-border'
  if (nilType === 'line') className += ' p-promised-empty-line'
  return className.trim()
})

const attrs = useAttrs()
const promiseRef = toRef(() => promise)
const { data, error, isPending, isDelayElapsed, isResolved, isRejected } = usePromise(promiseRef, 0)
const { loading, waiting } = useDelayLoading()
const isEmpty = computed(() => {
  return !loading.value && !isPending.value && !error.value && equalEmptyForData(data.value)
})

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
  z-index: 9;
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

.p-promised-empty-border {
  padding: 32px 0;
  border-radius: 3px;
  border: 1px solid rgba(239, 239, 245, 1);
}

.p-promised-empty-line {
  padding: 24px 0;
  border-top: 1px solid rgba(239, 239, 245, 1);
}
</style>

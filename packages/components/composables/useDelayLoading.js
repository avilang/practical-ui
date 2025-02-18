import { ref, onScopeDispose, watch } from 'vue'

// 此 hook 用于解决 loading 动画一闪而过的问题
// 当 waiting 由 false => true 显示时，会等待 delay 时间后再显示 loading 动画，若动画很快完成（在 delay 时间内），则不会显示 loading 动画
// 当 loading 动画隐藏时，会等待不少于 minPendingTime 时间后再隐藏 loading 动画

// 返回值：
// loading: 真正用于显示 loading 动画的值
// waiting: 用于控制 loading 值
// setLoadingStatus: 控制 waiting 值的方法，返回一个 Promise，当设置为 true 时，立即 resolve。设置为 false 时， 需 loading 为 false 后 resolve
export default ({ delay = 300, minPendingTime = 500, loadingValue = false } = {}) => {
  let initedTime = 0
  let timer = null
  const cleanTimer = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }
  const waiting = ref(!!loadingValue)
  const loading = ref(!!loadingValue)

  let resolveDone = null
  const done = (status) => {
    waiting.value = status
    return new Promise((resolve) => {
      if (status === true) {
        resolve()
      } else {
        resolveDone = resolve
      }
    })
  }

  watch(
    waiting,
    (status) => {
      if (initedTime === 0) {
        initedTime = new Date().getTime()
        cleanTimer()
        timer = setTimeout(() => {
          loading.value = status
        }, delay)
      } else {
        cleanTimer()
        if (loading.value !== status) {
          const now = new Date().getTime()
          // duration 代表 loading.value 持续时间
          // duration 可能是负值，如 loadingValue 初始值为 true，然 waiting 很快就变成 false
          // 此时 duration 为负值，spacingTime 值有可能会大于 minPendingTime(500) ，有意为之的设计
          const duration = now - initedTime - delay
          const spacingTime = duration >= minPendingTime ? 0 : minPendingTime - duration

          timer = setTimeout(() => {
            loading.value = status
            if (resolveDone) {
              resolveDone()
              resolveDone = null // 确保只调用一次
            }
          }, spacingTime)
        } else {
          if (resolveDone) {
            resolveDone()
            resolveDone = null
          }
        }
        initedTime = 0
      }
    },
    { immediate: !!loadingValue, deep: false }
  )

  onScopeDispose(() => {
    resolveDone = null
    cleanTimer()
  })

  return { loading, waiting, setLoadingStatus: done }
}

import { ref, onScopeDispose, watch, toValue } from 'vue'

export default (loading, { delay = 300 } = {}) => {
  let initedTime = 0
  let timer = null
  const cleanTimer = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }
  const pending = ref(!!toValue(loading))

  watch(
    () => !!toValue(loading),
    (loading) => {
      if (initedTime === 0) {
        initedTime = new Date().getTime()
        timer = setTimeout(() => {
          pending.value = loading
        }, delay)
      } else {
        cleanTimer()
        if (pending.value !== loading) pending.value = loading
        initedTime = 0
      }
    },
    { immediate: pending.value, deep: false }
  )

  onScopeDispose(() => {
    cleanTimer()
  })

  return pending
}

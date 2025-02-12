import { onScopeDispose } from 'vue'

export default function (target, name, fn) {
  target.addEventListener(name, fn)

  onScopeDispose(() => {
    target.removeEventListener(name, fn)
  })
}

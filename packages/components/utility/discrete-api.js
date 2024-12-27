import { createDiscreteApi } from 'naive-ui'
import './discrete-api.css'

export function createDiscreteFn(includes = ['loadingBar', 'message'], payload = {}) {
  const { loadingBar, message } = createDiscreteApi(includes, {
    configProviderProps: { inlineThemeDisabled: true },
    loadingBarProviderProps: {
      'container-style': { height: '2px' },
      'loading-bar-style': { loading: { height: '2px', background: '#2080f0ff' } }
    },
    messageProviderProps: {
      closable: false,
      duration: 3500,
      keepAliveOnHover: false,
      containerClass: payload.messageProviderProps?.containerClass || 'p-message-discrete'
    }
  })
  return { loadingBar, message }
}

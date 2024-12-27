import { createDiscreteApi } from 'naive-ui'

const { dialog, loadingBar } = createDiscreteApi(['dialog', 'loadingBar'], {
  configProviderProps: { inlineThemeDisabled: true },
  loadingBarProviderProps: {
    'container-style': { height: '2px' },
    'loading-bar-style': { loading: { height: '2px', background: '#2080f0ff' } }
  }
})

export const discreteDialog = dialog
export const discreteLoadingBar = loadingBar

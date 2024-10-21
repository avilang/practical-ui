import { PConfigProvider } from './config-provider/index.js'
import { PButton } from './button/index.js'

export default {
  install: (app, options = {}) => {
    const { prefix = 'p' } = options
    app.component(`${prefix}-config-provider`, PConfigProvider)
    app.component(`${prefix}-button`, PButton)
  }
}

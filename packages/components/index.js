import { PConfigProvider } from './config-provider/index.js'
import { PButton } from './button/index.js'
import { PInput } from './input/index.js'
import { PForm } from './form/index.js'

export default {
  install: (app, options = {}) => {
    const { prefix = 'p' } = options

    app.component(`${prefix}-config-provider`, PConfigProvider)
    app.component(`${prefix}-button`, PButton)
    app.component(`${prefix}-input`, PInput)
    app.component(`${prefix}-form`, PForm)
  }
}

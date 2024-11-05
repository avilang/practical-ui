import { NIcon, NInputGroup, NInputGroupLabel } from 'naive-ui'
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
    app.component(`${prefix}-icon`, NIcon)
    app.component(`${prefix}-input-group`, NInputGroup)
    app.component(`${prefix}-input-group-label`, NInputGroupLabel)
  }
}

export * from './export.js'

import {
  NIconWrapper,
  NIcon,
  NInputGroup,
  NInputGroupLabel,
  NPopover,
  NSpin,
  NCollapse,
  NCollapseItem,
  NDropdown,
  NTooltip
} from 'naive-ui'
import { Practical } from './practical/index.js'
import { PForm } from './form/index.js'
import { PInput } from './input/index.js'
import { PSelect } from './select/index.js'
import { PButton } from './button/index.js'
import { PTable } from './table/index.js'
import { PPopconfirm } from './popconfirm/index.js'
import { PPromised } from './promised/index.js'

export default {
  install: (app, options = {}) => {
    const { prefix = 'p' } = options

    app.component(`${prefix}-practical`, Practical)
    app.component(`${prefix}-form`, PForm)
    app.component(`${prefix}-input`, PInput)
    app.component(`${prefix}-select`, PSelect)
    app.component(`${prefix}-button`, PButton)
    app.component(`${prefix}-table`, PTable)
    app.component(`${prefix}-popconfirm`, PPopconfirm)
    app.component(`${prefix}-promised`, PPromised)
    app.component(`${prefix}-icon-wrapper`, NIconWrapper)
    app.component(`${prefix}-icon`, NIcon)
    app.component(`${prefix}-input-group`, NInputGroup)
    app.component(`${prefix}-input-group-label`, NInputGroupLabel)
    app.component(`${prefix}-popover`, NPopover)
    app.component(`${prefix}-spin`, NSpin)
    app.component(`${prefix}-collapse`, NCollapse)
    app.component(`${prefix}-collapse-item`, NCollapseItem)
    app.component(`${prefix}-dropdown`, NDropdown)
    app.component(`${prefix}-tooltip`, NTooltip)
  }
}

export { createDiscreteApi } from 'naive-ui'
export * from './export.js'

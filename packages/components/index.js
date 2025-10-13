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
  NTooltip,
  NDivider,
  NEmpty,
  NUpload,
  NUploadTrigger,
  NUploadFileList,
  NUploadDragger
} from 'naive-ui'
import { Practical } from './practical/index.js'
import { PSearch } from './search/index.js'
import { PForm } from './form/index.js'
import { PInput } from './input/index.js'
import { PInputNumber } from './input-number/index.js'
import { PInputIdentifier } from './input-identifier/index.js'
import { PSelect } from './select/index.js'
import { PSwitch } from './switch/index.js'
import { PRadio } from './radio/index.js'
import { PCheckbox } from './checkbox/index.js'
import { PCheckboxGroup } from './checkbox-group/index.js'
import { PRadioGroup } from './radio-group/index.js'
import { PButton } from './button/index.js'
import { PDataTable } from './data-table/index.js'
import { PPopconfirm } from './popconfirm/index.js'
import { PPagination } from './pagination/index.js'
import { PPromised } from './promised/index.js'
import { PDrawer } from './drawer/index.js'

export default {
  install: (app, options = {}) => {
    const { prefix = 'p' } = options

    app.component(`${prefix}-practical`, Practical)
    app.component(`${prefix}-search`, PSearch)
    app.component(`${prefix}-form`, PForm)
    app.component(`${prefix}-input`, PInput)
    app.component(`${prefix}-input-number`, PInputNumber)
    app.component(`${prefix}-input-identifier`, PInputIdentifier)
    app.component(`${prefix}-select`, PSelect)
    app.component(`${prefix}-switch`, PSwitch)
    app.component(`${prefix}-radio`, PRadio)
    app.component(`${prefix}-radio-group`, PRadioGroup)
    app.component(`${prefix}-checkbox`, PCheckbox)
    app.component(`${prefix}-checkbox-group`, PCheckboxGroup)
    app.component(`${prefix}-button`, PButton)
    app.component(`${prefix}-data-table`, PDataTable)
    app.component(`${prefix}-popconfirm`, PPopconfirm)
    app.component(`${prefix}-pagination`, PPagination)
    app.component(`${prefix}-promised`, PPromised)
    app.component(`${prefix}-drawer`, PDrawer)
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
    app.component(`${prefix}-divider`, NDivider)
    app.component(`${prefix}-empty`, NEmpty)
    app.component(`${prefix}-upload`, NUpload)
    app.component(`${prefix}-upload-trigger`, NUploadTrigger)
    app.component(`${prefix}-upload-file-list`, NUploadFileList)
    app.component(`${prefix}-upload-dragger`, NUploadDragger)
  }
}

export * from './export.js'

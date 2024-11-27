import { h, onScopeDispose } from 'vue'
import { useDialog } from 'naive-ui'
import DialogAction from './dialog-action.vue'
import './dialog.css'

function setDialogContent(content) {
  if (typeof content === 'string') {
    return function () {
      return h('p', { innerHTML: content })
    }
  } else if (Array.isArray(content)) {
    return function () {
      return h(
        'div',
        content.map((item) => {
          return h('p', { innerHTML: item })
        })
      )
    }
  }
  return content
}

export default () => {
  let commonDialog = null
  let successDialog = null
  let warningDialog = null
  let errorDialog = null
  const dialog = useDialog()

  // options 对应 dialog.create 方法的参数
  // payload 扩展的参数
  // type Dialog 类型 success, warning, error
  const create = (options = {}, payload = { width: 430 }, type) => {
    const config = {
      autoFocus: false,
      blockScroll: true,
      bordered: false,
      closable: true,
      showIcon: false,
      title: '提示',
      positiveText: '确定',
      negativeText: '取消',
      ...options,
      transformOrigin: 'center',
      class: 'p-dialog',
      contentClass: 'p-dialog-content',
      actionClass: 'p-dialog-action'
    }

    config.closeOnEsc = false
    config.maskClosable = false
    config.iconPlacement = 'left'
    config.titleClass = config.showIcon ? 'p-dialog-title' : 'p-dialog-title p-dialog-title-without-icon'
    config.style = 'width: ' + payload.width + 'px'

    if (type) config.type = type
    if (config.positiveText || config.negativeText) {
      config.action = function () {
        return h(DialogAction, {
          positiveText: config.positiveText,
          negativeText: config.negativeText,
          type: type,
          onPositiveClick: config.onPositiveClick,
          onNegativeClick: config.onNegativeClick,
          onClose: function () {
            if (type === 'success' && successDialog) {
              successDialog.destroy()
              successDialog = null
            } else if (type === 'warning' && warningDialog) {
              warningDialog.destroy()
              warningDialog = null
            } else if (type === 'error' && errorDialog) {
              errorDialog.destroy()
              errorDialog = null
            } else if (commonDialog) {
              commonDialog.destroy()
              commonDialog = null
            }
          },
          onLoading: (status) => {
            let d = null
            if (type === 'success' && successDialog) {
              d = successDialog
            } else if (type === 'warning' && warningDialog) {
              d = warningDialog
            } else if (type === 'error' && errorDialog) {
              d = errorDialog
            } else if (commonDialog) {
              d = commonDialog
            }

            if (d.closable === false) return
            d.class = status === true ? 'p-dialog p-dialog-loading' : 'p-dialog'
          }
        })
      }
    }

    config.content = setDialogContent(options.content)
    return dialog.create(config)
  }
  const success = (options, payload) => {
    if (options['negativeText'] == null) options['negativeText'] = ''
    if (options['positiveText'] == null) options['positiveText'] = '我知道了'
    if (options.closable == null) options.closable = false
    if (options.showIcon == null) options.showIcon = true
    const d = create(options, payload, 'success')
    successDialog = d
    return d
  }
  const warning = (options, payload) => {
    if (options['negativeText'] == null) options['negativeText'] = ''
    if (options['positiveText'] == null) options['positiveText'] = '我知道了'
    if (options.closable == null) options.closable = false
    if (options.showIcon == null) options.showIcon = true
    const d = create(options, payload, 'warning')
    warningDialog = d
    return d
  }
  const error = (options, payload) => {
    if (options['negativeText'] == null) options['negativeText'] = ''
    if (options['positiveText'] == null) options['positiveText'] = '我知道了'
    if (options.closable == null) options.closable = false
    if (options.showIcon == null) options.showIcon = true
    const d = create(options, payload, 'error')
    errorDialog = d
    return d
  }

  onScopeDispose(() => {
    commonDialog && commonDialog.destroy()
    successDialog && successDialog.destroy()
    warningDialog && warningDialog.destroy()
    errorDialog && errorDialog.destroy()
    commonDialog = null
    successDialog = null
    warningDialog = null
    errorDialog = null
  })

  return {
    open: function (options, payload) {
      const d = create(options, payload)
      commonDialog = d
      return d
    },
    success,
    warning,
    error
  }
}

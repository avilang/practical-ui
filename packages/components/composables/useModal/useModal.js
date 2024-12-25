import { h } from 'vue'
import { useModal } from 'naive-ui'
import './modal.css'

export default () => {
  const modal = useModal()
  // options 对应 modal.create 方法的参数
  // payload 扩展的参数
  const create = (options = {}, payload = {}) => {
    const config = {
      title: '',
      closable: true,
      ...options,
      autoFocus: false,
      blockScroll: true,
      preset: 'dialog',
      transformOrigin: 'center',
      showIcon: false,
      closeOnEsc: false,
      maskClosable: false,
      bordered: false,
      class: 'p-modal',
      contentClass: 'p-modal-content'
    }
    const oPayload = {
      width: '600px',
      maxHeight: 'calc(100vh - 128px)',
      contentProps: null,
      footer: null,
      footerProps: null,
      ...payload
    }

    if (!config.title && options.closable == null) config.closable = false
    if (config.title) config.titleClass = 'p-modal-title'
    if (!config.title && !config.closable) config.titleClass = 'p-modal-title-hidden'
    if (!config.title && config.closable) config.titleClass = 'p-modal-title-closable'

    if (!options.contentStyle) {
      if (config.title) {
        config.contentStyle = 'padding: 16px'
      } else if (!config.title && config.closable) {
        config.contentStyle = 'padding: 0 16px 16px'
      } else if (!config.title && !config.closable) {
        config.contentStyle = 'padding: 16px'
      }
    }

    let modalStyle = []
    if (oPayload.width) modalStyle.push('width:' + oPayload.width)
    if (oPayload.maxHeight) modalStyle.push('max-height:' + oPayload.maxHeight)
    if (modalStyle) config.style = modalStyle.join(';')

    config.content = function () {
      if (!options.content) {
        return h('div', null)
      } else {
        return h(options.content, oPayload.contentProps)
      }
    }

    if (oPayload.footer) {
      config.action = function () {
        return h(oPayload.footer, oPayload.footerProps)
      }
    }

    const m = modal.create(config)
    return {
      instance: m,
      lock: function () {
        m.class = 'p-modal p-modal-lock'
      },
      unLock: function () {
        m.class = 'p-modal'
      }
    }
  }

  return { open: create }
}

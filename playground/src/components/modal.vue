<template>
  <box-component :name="`${name}`">
    <p-button type="default" @click="handleOpen">常规</p-button>
    <p-button class="ml-10" type="default" @click="handleOpen2">内容超高</p-button>
    <p-button class="ml-10" type="default" @click="handleHeaderFooter">header - footer</p-button>
  </box-component>
</template>

<script setup>
import { h, reactive } from 'vue'
import { useModal } from '@avilang/practical-ui/index.js'
import BoxComponent from './box-component.vue'
import ModalContent from './modal-content.vue'
import ModalFooter from './modal-footer.vue'

defineOptions({
  name: 'ModalWithBox'
})

const name = 'Modal'
const modal = useModal()

const contentProps = reactive({ text: '我是初始文本' })
function handleOpen() {
  modal.open({ content: ModalContent }, { contentProps })
}
setTimeout(() => {
  contentProps.text = '我是新文本'
}, 5000)

function ModalContent2() {
  return h('div', null, [
    h('div', '开始'),
    h('div', { innerHTML: '中间', style: { backgroundColor: '#f90', height: '10000px' } }),
    h('div', '结束')
  ])
}
function handleOpen2() {
  modal.open({ content: ModalContent2(), closable: true })
}

function handleHeaderFooter() {
  const m = modal.open(
    { title: '申请售后', content: ModalContent },
    {
      contentProps: { text: '确认申请吗？' },
      footer: ModalFooter,
      footerProps: {
        onClose: () => {
          m.unLock()
          setTimeout(() => {
            m.instance.destroy()
          }, 1000)
        },
        onOk: () => {
          m.lock()
        }
      }
    }
  )
}
</script>

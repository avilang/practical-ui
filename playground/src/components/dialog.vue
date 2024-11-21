<template>
  <box-component :name="`${name}`">
    <p-button type="default" @click="handleOpen">常规</p-button>
    <p-button class="ml-10" type="default" @click="handleOk">成功</p-button>
    <p-button class="ml-10" type="default" @click="handleWarning">警告</p-button>
    <p-button class="ml-10" type="default" @click="handleError">错误</p-button>
  </box-component>
</template>

<script setup>
import { useDialog } from '@avilang/practical-ui/index.js'
import BoxComponent from './box-component.vue'

defineOptions({
  name: 'DialogWithBox'
})

const name = 'Dialog'
const dialog = useDialog()

const handleOpen = () => {
  dialog.open({
    content: '这是一个<span style="color:red">弹出窗</span>',
    onPositiveClick: ({ done }) => {
      // console.log('点击了 open 确定按钮')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 250)
      }).then(() => {
        done()
      })
    }
  })
}
const handleOk = () => {
  dialog.success({
    content: [
      '这是一个成功类型的弹出窗',
      '啊的地方阿斯顿发撒地方<span style="color:green">阿斯顿发</span>啊撒风撒',
      '阿斯顿发撒地方阿斯顿发阿斯顿发阿斯顿发阿斯顿发撒地方阿斯顿发送到发送的方式打发阿斯顿发顺丰撒风阿发生的'
    ],
    onPositiveClick: () => {
      console.log('点击了 ok 确定按钮')
      return false
    }
  })
}
const handleWarning = () => {
  dialog.warning({
    content: ['这是一个警告类型的弹出窗'],
    onPositiveClick: ({ done }) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 350)
      }).then(() => {
        done().then(() => {
          console.log('点击了 warning 确定按钮')
        })
      })
    }
  })
}
const handleError = () => {
  dialog.error({
    content: ['这是一个错误类型的弹出窗'],
    negativeText: '返回',
    onNegativeClick: () => {
      console.log('点击了 error 取消按钮')
      return false
    }
  })
}
</script>

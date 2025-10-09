<template>
  <box-component :name="name">
    <p-button>Primary Button</p-button>
    <p-button class="ml-10" type="error" size="tiny">Tiny Error Button</p-button>
    <p-button class="ml-10" type="default" size="small">Small Default Button</p-button>
    <p-button class="ml-10" type="error" size="xs">XS Error Button</p-button>
    <p-button class="ml-10" type="success" size="large">Large Success Button</p-button>
  </box-component>

  <box-component :name="`${name} - 显示为块级`">
    <p-button type="warning" size="large" block disabled>Block Large Warning Button</p-button>
  </box-component>

  <box-component :name="`${name} - loading`">
    <div class="flex">
      <p-button :loading="loading" :loadingWithoutText="false" disabled @click="handleLoading"
        >Loading Primary Button</p-button
      >
      <p-button class="ml-10" type="success" :loading="loading" @click="handleLoading"
        ><template #icon>
          <p-icon size="18"> <WechatOutlined /> </p-icon></template
        >微信支付</p-button
      >
      <p-button class="ml-10" :waiting="waiting" type="warning" secondary @click="handleWaiting"
        >Waiting Primary Button</p-button
      >
    </div>
    <p-button class="mt-10" type="error" block @click="handleLoadingBar">Loading Bar Block Error Button</p-button>
    <p-button class="mt-10" block @click="handleMessage">Message Block Button</p-button>
  </box-component>

  <box-component :name="`${name} - 点击按钮不聚焦`">
    <div style="margin-bottom: 10px">
      <input style="width: 100%" />
    </div>
    <p-button :focusable="false">先让上面输入框聚集，在点击该按钮，观察输入框是否失去焦点</p-button>
  </box-component>
</template>

<script setup>
import { ref } from 'vue'
import { createDiscreteFn } from '@avilang/practical-ui/index.js'
import { WechatOutlined } from '@vicons/antd'
import BoxComponent from './box-component.vue'

defineOptions({
  name: 'PButtonWithBox'
})

const name = 'PButton'
const { loadingBar, message } = createDiscreteFn()

const loading = ref(false)
function handleLoading() {
  console.log('🚀 ~ handleLoading ~ handleLoading')
  loading.value = true
}

function handleLoadingBar() {
  loadingBar.start()
  setTimeout(() => {
    loadingBar.finish()
  }, 600)
}

const waiting = ref(false)
function handleWaiting() {
  waiting.value = true
  console.log('🚀 ~ handleWaiting ~ handleWaiting')
}

function handleMessage() {
  message.success('Message Block Button')
}
</script>

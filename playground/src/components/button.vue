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
    </div>
    <p-button class="mt-10" type="error" block @click="handleLoadingBar">Loading Bar Block Error Button</p-button>
  </box-component>
</template>

<script setup>
import { ref } from 'vue'
import { createDiscreteApi } from '@avilang/practical-ui/index.js'
import { WechatOutlined } from '@vicons/antd'
import BoxComponent from './box-component.vue'

defineOptions({
  name: 'PButtonWithBox'
})

const name = 'PButton'

const loading = ref(false)
function handleLoading() {
  console.log('🚀 ~ handleLoading ~ handleLoading')
  loading.value = true
}

const { loadingBar } = createDiscreteApi(['loadingBar'])
function handleLoadingBar() {
  loadingBar.start()
  setTimeout(() => {
    loadingBar.finish()
  }, 600)
}
</script>

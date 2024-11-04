<template>
  <box-component :name="name">
    <p-button>Primary Button</p-button>
    <p-button class="ml-10" type="error" size="tiny">Tiny Error Button</p-button>
    <p-button class="ml-10" type="default" size="small">Small Default Button</p-button>
    <p-button class="ml-10" type="success" size="large">Large Success Button</p-button>
  </box-component>

  <box-component :name="`${name} - 显示为块级`">
    <p-button type="warning" size="large" block>Block Large Warning Button</p-button>
  </box-component>

  <box-component :name="`${name} - loading`">
    <div class="flex">
      <p-button :loading="loading" @click="handleLoading">Loading Primary Button</p-button>
      <p-button class="ml-10" type="success" :loading="loading" @click="handleLoading"
        ><template #icon>
          <p-icon> <AlipayCircleOutlined /> </p-icon></template
        >支付宝支付</p-button
      >
    </div>
    <p-button class="mt-10" type="error" block :loading="loading" @click="handleLoading"
      >Loading Block Error Button</p-button
    >
  </box-component>
</template>

<script setup>
import { ref } from 'vue'
import { AlipayCircleOutlined } from '@vicons/antd'
import BoxComponent from './box-component.vue'

defineOptions({
  name: 'PButtonWithBox'
})

const name = 'PButton'

const loading = ref(false)
function handleLoading() {
  loading.value = true
}
</script>

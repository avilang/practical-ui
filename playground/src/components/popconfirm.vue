<template>
  <box-component :name="`${name}`">
    <p-popconfirm positive-text="发送" @positiveClick="onPositiveClick" @negativeClick="onNegativeClick">
      <template #trigger>
        <p-button>发送通知</p-button>
      </template>
      确认发送通知吗？
    </p-popconfirm>
    <p-popconfirm type="success">
      <template #trigger>
        <p-button class="ml-10" type="success">确认收货</p-button>
      </template>
      确认收到货物了吗？
    </p-popconfirm>
    <p-popconfirm type="warning">
      <template #trigger>
        <p-button class="ml-10" type="warning">申请退货</p-button>
      </template>
      确认申请退货吗？
    </p-popconfirm>
    <p-popconfirm type="error">
      <template #trigger>
        <p-button class="ml-10" type="error">关闭订单</p-button>
      </template>
      确认关闭订单吗？
    </p-popconfirm>
  </box-component>
</template>

<script setup>
import BoxComponent from './box-component.vue'

defineOptions({
  name: 'PPopconfirmWithBox'
})

const name = 'PPopconfirm'

function onPositiveClick() {
  console.log('🚀 ~ onPositiveClick ~ onPositiveClick')
}

function onNegativeClick() {
  console.log('🚀 ~ onNegativeClick ~ onNegativeClick')
}
</script>

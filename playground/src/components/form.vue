<template>
  <box-component :name="`${name}`">
    <p-form :model="model" :show-label="false" @submit="handleSubmit">
      <p-button block attr-type="submit">登录</p-button>
    </p-form>
  </box-component>
</template>

<script setup>
import { ref, markRaw } from 'vue'
import { UserOutlined, LockOutlined } from '@vicons/antd'
import BoxComponent from './box-component.vue'

defineOptions({
  name: 'PFormWithBox'
})

const name = 'PForm'
const model = ref([
  {
    type: 'input',
    field: 'account',
    value: '13690766465',
    props: {
      placeholder: '请输入账号',
      maxlength: 11,
      prefixIcon: { component: markRaw(UserOutlined), color: 'rgb(51, 54, 57)' }
    },
    label: '账号'
  },
  {
    type: 'input',
    field: 'password',
    value: '',
    props: {
      type: 'password',
      placeholder: '请输入密码',
      trim: false,
      maxlength: 30,
      showPassword: true,
      prefixIcon: { component: markRaw(LockOutlined), color: 'rgb(51, 54, 57)' }
    },
    label: '密码'
  }
])

function handleSubmit(data) {
  console.log('🚀 ~ handleSubmit ~ data:', data)
}
</script>

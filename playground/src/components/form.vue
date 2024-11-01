<template>
  <box-component :name="`${name}`">
    <p-form :model="model" :show-label="false"></p-form>
  </box-component>
</template>

<script setup>
import { ref } from 'vue'
import BoxComponent from './box-component.vue'

defineOptions({
  name: 'PFormWithBox'
})

const name = 'PForm'
const model = ref([
  { type: 'input', field: 'account', value: '', props: { placeholder: '请输入账号', maxlength: 11 }, label: '账号' },
  {
    type: 'input',
    field: 'password',
    value: '',
    props: { type: 'password', placeholder: '请输入密码', trim: false, maxlength: 30, showPassword: true },
    label: '密码'
  }
])
</script>

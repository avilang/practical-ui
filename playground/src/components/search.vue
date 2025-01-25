<template>
  <box-component :name="`${name}`">
    <p-search :model="model" />
  </box-component>
</template>

<script setup>
import BoxComponent from './box-component.vue'

defineOptions({
  name: 'PSearchWithBox'
})

const name = 'PSearch'

const model = [
  {
    type: 'input',
    field: 'accountName',
    defaultValue: '136',
    props: {
      placeholder: '请输入账号(手机号)',
      maxlength: 11
    },
    label: '账号'
  },
  {
    type: 'select',
    field: 'state',
    defaultValue: '',
    props: {
      options: [
        { label: '全部', value: '' },
        { label: '启用', value: 't' },
        { label: '禁用', value: 'f' }
      ],
      clearable: false
    },
    label: '状态'
  }
]
</script>

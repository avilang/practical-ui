<template>
  <box-component :name="`${name}`">
    <p-search :model="model" :item-width="350" />
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
    props: { placeholder: '手机号', maxlength: 11 },
    label: '账号'
  },
  {
    type: 'input',
    field: 'nickName',
    props: { maxlength: 20 },
    label: '昵称'
  },
  {
    type: 'select',
    field: 'state',
    defaultValue: '',
    props: {
      options: [
        { label: '不限', value: '' },
        { label: '启用', value: 't' },
        { label: '禁用', value: 'f' }
      ],
      clearable: false
    },
    label: '状态'
  },
  {
    type: 'select',
    field: 'deleted',
    defaultValue: 'f',
    props: {
      options: [
        { label: '不限', value: '' },
        { label: '已删除', value: 't' },
        { label: '未删除', value: 'f' }
      ],
      clearable: false
    },
    label: '是否删除'
  }
]
</script>

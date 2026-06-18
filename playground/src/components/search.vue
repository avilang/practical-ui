<template>
  <box-component :name="`${name}`">
    <p-search :model="model" :item-width="260" @search="onSearch" @change="onReset" @reset="onReset" />
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
    props: { placeholder: '手机号', maxlength: 11, clearable: true },
    label: '账号12'
  },
  {
    type: 'input',
    field: 'nickName',
    props: { maxlength: 20, clearable: true },
    label: '12abcdTY13AG'
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
    label: 'a状态B'
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

function onSearch(query, payload = {}) {
  console.log('🚀 ~ onSearch ~ payload:', payload)
  console.log('🚀 ~ onSearch ~ query:', query)
}

function onReset(data, payload = {}) {
  if (payload.type === 'change' && payload.isActionTriggered) return
  console.log(`🚀 ~ ${payload.type} ~ payload:`, payload)
  console.log(`🚀 ~ ${payload.type} ~ data:`, data)
}
</script>

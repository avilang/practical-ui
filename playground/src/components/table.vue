<template>
  <box-component :name="`${name}`">
    <p-data-table :columns="columns" :data="data" :striped="false" />
  </box-component>
</template>

<script setup>
import BoxComponent from './box-component.vue'

defineOptions({
  name: 'PDataTableWithBox'
})

const name = 'PDataTable'

const columns = [
  { title: '账号', key: 'account' },
  { title: '昵称', key: 'name' },
  { title: '状态', key: 'status' },
  { title: '创建时间', key: 'cTime' },
  { title: '最近修改时间', key: 'uTime' },
  { title: '操作' }
]
const data = [
  {
    account: '1',
    name: 'avilang',
    status: '启用',
    cTime: '2024-11-06 21:21:16',
    uTime: '2024-11-06 21:21:16'
  },
  {
    account: '2',
    name: 'avilang',
    status: '启用',
    cTime: '2024-11-06 21:21:16',
    uTime: '2024-11-06 21:21:16'
  },
  {
    account: '3',
    name: 'avilang',
    status: '启用',
    cTime: '2024-11-06 21:21:16',
    uTime: '2024-11-06 21:21:16'
  },
  {
    account: '4',
    name: 'avilang',
    status: '启用',
    cTime: '2024-11-06 21:21:16',
    uTime: '2024-11-06 21:21:16'
  },
  {
    account: '5',
    name: 'avilang',
    status: '启用',
    cTime: '2024-11-06 21:21:16',
    uTime: '2024-11-06 21:21:16'
  },
  {
    account: '6',
    name: 'avilang',
    status: '启用',
    cTime: '2024-11-06 21:21:16',
    uTime: '2024-11-06 21:21:16'
  },
  {
    account: '7',
    name: 'avilang',
    status: '启用',
    cTime: '2024-11-06 21:21:16',
    uTime: '2024-11-06 21:21:16'
  },
  {
    account: '8',
    name: 'avilang',
    status: '启用',
    cTime: '2024-11-06 21:21:16',
    uTime: '2024-11-06 21:21:16'
  },
  {
    account: '9',
    name: 'avilang',
    status: '启用',
    cTime: '2024-11-06 21:21:16',
    uTime: '2024-11-06 21:21:16'
  }
]
</script>

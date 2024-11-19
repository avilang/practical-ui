<template>
  <box-component :name="`${name}`">
    <p-table striped>
      <thead>
        <tr>
          <th>账号</th>
          <th>昵称</th>
          <th>状态</th>
          <th>创建时间</th>
          <th>最近修改时间</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>13698911289</td>
          <td>avilang</td>
          <td>正常</td>
          <td>2024-11-06 21:21:16</td>
          <td>2024-11-06 21:21:16</td>
        </tr>
        <tr>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
        </tr>
      </tbody>
    </p-table>
  </box-component>
</template>

<script setup>
import BoxComponent from './box-component.vue'

defineOptions({
  name: 'PTableWithBox'
})

const name = 'PTable'
</script>

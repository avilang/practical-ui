<template>
  <box-component :name="`${name} - 多选`">
    <p-select v-model="value" multiple :options="options" width="200px" @change="handleChange"
  /></box-component>
</template>

<script setup>
import { ref } from 'vue'
import BoxComponent from './box-component.vue'

defineOptions({
  name: 'PSelectWithBox'
})

const name = 'PSelect'
const value = ref(['2', '4'])
const options = [
  {
    value: '1',
    label: '选项1'
  },
  {
    value: '2',
    label: '选项2'
  },
  {
    value: '3',
    label: '选项3'
  },
  {
    value: '4',
    label: '选项4'
  },
  {
    value: '5',
    label: '选项5'
  }
]

function handleChange(val) {
  console.log('🚀 ~ handleChange ~ val:', val)
}
</script>

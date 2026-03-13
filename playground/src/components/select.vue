<template>
  <box-component :name="`${name} - 单选`">
    <p-select v-model="value3" :options="options" style="width: 200px" @change="handleChange" />
  </box-component>

  <box-component :name="`${name} - 多选`">
    <p-select v-model="value" multiple :options="options" style="width: 200px" @change="handleChange" />
  </box-component>

  <box-component :name="`${name} - 远程`">
    <p-select
      v-model="value2"
      multiple
      :options="options2"
      remote
      filterable
      :throttleSearch="false"
      :loading="loading"
      style="width: 200px"
      @change="handleChange2"
      @search="handleSearch"
    />
  </box-component>
</template>

<script setup>
import { ref } from 'vue'
import BoxComponent from './box-component.vue'

defineOptions({
  name: 'PSelectWithBox'
})

const name = 'PSelect'
const value = ref(['2', '4'])
const value3 = ref(null)
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

const value2 = ref(null)
const options2 = ref([])
const loading = ref(false)
function handleChange2(val) {
  console.log('🚀 ~ handleChange2 ~ val:', val)
}

function handleSearch() {
  loading.value = true
  setTimeout(() => {
    options2.value = [
      { value: 1, label: '账号1' },
      { value: 2, label: '账号2' },
      { value: 3, label: '账号3' }
    ]
    loading.value = false
  }, 1500)
}
</script>

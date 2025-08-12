<template>
  <box-component :name="`${name}`">
    <p-checkbox
      style="margin-right: 20px"
      @change="handleChange"
      v-model="value1"
      unchecked-value=""
      checkedValue="apple"
      >红苹果</p-checkbox
    >
    <p-checkbox style="margin-right: 20px" @change="handleChange" v-model="value2" :uncheckedValue="0" :checkedValue="1"
      >黄香蕉</p-checkbox
    >

    <p-checkbox style="margin-right: 20px" @change="handleChange" :uncheckedValue="0" :checkedValue="1" disabled
      >绿橙子</p-checkbox
    >
    <p-checkbox
      style="margin-right: 20px"
      @change="handleChange"
      v-model="value3"
      :uncheckedValue="false"
      :checkedValue="true"
      >紫葡萄</p-checkbox
    >
    <p-checkbox style="margin-right: 20px" @change="handleChange" v-model="value4" :uncheckedValue="0" :checkedValue="2"
      >粉桃子</p-checkbox
    >
  </box-component>
</template>

<script setup>
import { ref } from 'vue'
import BoxComponent from './box-component.vue'

defineOptions({
  name: 'PCheckboxWithBox'
})

const name = 'PCheckbox'
const value1 = ref('apple')
const value2 = ref(0)
const value3 = ref(false)
const value4 = ref(2)

function handleChange(val) {
  console.log('🚀 ~ handleChange ~ val:', val)
}
</script>

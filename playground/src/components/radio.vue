<template>
  <box-component :name="`${name}`">
    <p-radio style="margin-right: 20px" @change="handleChange" v-model="value" val="apple">苹果</p-radio>
    <p-radio style="margin-right: 20px" @change="handleChange" v-model="value" val="banana" disabled>香蕉</p-radio>
    <p-radio style="margin-right: 20px" @change="handleChange" v-model="value" val="orange">橙子</p-radio>
    <p-radio style="margin-right: 20px" @change="handleChange" v-model="value" :val="true">葡萄</p-radio>
    <p-radio style="margin-right: 20px" @change="handleChange" v-model="value" :val="11">桃子</p-radio>
  </box-component>
</template>

<script setup>
import { ref } from 'vue'
import BoxComponent from './box-component.vue'

defineOptions({
  name: 'PRadioWithBox'
})

const name = 'PRadio'
const value = ref('orange')

function handleChange(val) {
  console.log('🚀 ~ handleChange ~ val:', val)
}
</script>

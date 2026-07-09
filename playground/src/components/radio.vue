<template>
  <box-component :name="`${name}`">
    <p-radio class="radio-red" style="margin-right: 20px" @change="handleChange" v-model="value" val="apple"
      >苹果</p-radio
    >
    <p-radio style="margin-right: 20px" @change="handleChange" v-model="value" val="banana" disabled>香蕉</p-radio>
    <p-radio style="margin-right: 20px" @change="handleChange" v-model="value" val="orange">橙子</p-radio>
    <p-radio style="margin-right: 20px" @change="handleChange" v-model="value" :val="true">葡萄</p-radio>
    <p-radio style="margin-right: 20px" @change="handleChange" v-model="value" :val="11">桃子</p-radio>
    <p-radio style="margin-right: 20px" @change="handleChange" v-model="value" :val="12" readonly>只读选项</p-radio>
  </box-component>

  <box-component :name="`${name} - group`">
    <p-radio-group
      class="radio-group-radius"
      style="padding: 16px; border: 1px solid #f90"
      v-model="groupValue"
      @change="handleChangeGroup"
    >
      <p-radio val="banana" @change="handleChange">香蕉</p-radio>
      <p-radio val="orange" @change="handleChange">橙子</p-radio>
    </p-radio-group>
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

const groupValue = ref('banana')

function handleChangeGroup(val) {
  console.log('🚀 ~ handleChangeGroup ~ val:', val)
}
</script>

<style>
.radio-red .n-radio__label {
  color: red !important;
}

.radio-group-radius {
  border-radius: 4px;
}
</style>

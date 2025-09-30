<template>
  <box-component :name="`${name}`">
    <p-checkbox
      class="checkbox-red"
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

  <box-component :name="`${name} - group`">
    <p-checkbox-group
      class="checkbox-group-radius"
      style="padding: 16px; border: 1px solid #f90"
      v-model="aValue"
      @change="handleCheckedChange"
    >
      <p-checkbox :val="1">圆珠笔</p-checkbox>
      <p-checkbox val="pencil">铅笔</p-checkbox>
      <p-checkbox :val="2">马克笔</p-checkbox>
      <p-checkbox val="eraser" disabled>橡皮</p-checkbox>
    </p-checkbox-group>
    <div style="margin-top: 10px; padding-left: 2px">{{ aValue }}</div>
  </box-component>

  <box-component :name="`${name} - 若选中时，再次点击不取消选中 - 要选中的效果`">
    <p-checkbox style="margin-right: 20px" v-model="value5" unchecked-value="" checked-value="AAAAA" checked-only
      >AAAAA</p-checkbox
    >
    <p-checkbox style="margin-right: 20px" v-model="value5" unchecked-value="" checked-value="BBBBB" checked-only
      >BBBBB</p-checkbox
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
const value5 = ref('BBBBB')

function handleChange(val) {
  console.log('🚀 ~ handleChange ~ val:', val)
}

const aValue = ref([2, 'pencil'])
function handleCheckedChange(value, meta) {
  console.log('🚀 ~ handleCheckedChange ~ meta:', meta)
  console.log('🚀 ~ handleCheckedChange ~ value:', value)
}
</script>

<style>
.checkbox-red > span {
  color: red !important;
}

.checkbox-group-radius {
  border-radius: 4px;
}
</style>

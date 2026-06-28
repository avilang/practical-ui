<template>
  <box-component :name="`${name} - 默认 Trim`">
    <p-input placeholder="请输入" v-model="value" />
    <div class="mt-10 pl-2">输入框值：[{{ value }}]</div>
  </box-component>

  <box-component :name="`${name} - Not Trim`">
    <p-input v-model="value2" :trim="false" :blurByEnter="true" @enter="handleEnter" @blur="handleBlur" />
    <div class="mt-10 pl-2">输入框值：[{{ value2 }}]</div>
  </box-component>

  <box-component :name="`${name} - 字数统计`">
    <p-input placeholder="请输入" v-model="value3" :trim="false" :autofocus="true" :maxlength="20" show-count />
  </box-component>

  <box-component :name="`${name} - textarea`">
    <p-input
      placeholder="请输入"
      v-model="value4"
      type="textarea"
      :trim="false"
      :autosize="{ minRows: 2 }"
      :maxlength="1000"
      show-count
    />
  </box-component>

  <box-component :name="`${name} - lazy - 失去焦点后才真正改变值`">
    <p-input placeholder="请输入" v-model="value5" lazy :trim="false" @enter="handleEnter2" @blur="handleBlur" />
    value5: [{{ value5 }}]
  </box-component>

  <box-component :name="`${name} - style`">
    <p-input placeholder="请输入" style="width: 300px; --n-border-radius: 0; --n-height: 30px" />
  </box-component>
</template>

<script setup>
import { ref } from 'vue'
import BoxComponent from './box-component.vue'

defineOptions({
  name: 'PInputWithBox'
})

const name = 'PInput'
const value = ref('ABC')
const value2 = ref('')
const value3 = ref('❤️ 图标 1 A')
const value4 = ref('❤️ 图标 1 A')

function handleEnter({ value }) {
  console.log('🚀 ~ handleEnter ~ value:', value)
}

function handleBlur({ value, isTriggerByEnter }) {
  if (isTriggerByEnter) return
  console.log('🚀 ~ handleBlur ~ value:', value)
}

const value5 = ref('')
function handleEnter2({ value, lazy }) {
  console.log('🚀 ~ handleEnter2 ~ lazy:', lazy)
  console.log('🚀 ~ handleEnter2 ~ value:', value)
}
</script>

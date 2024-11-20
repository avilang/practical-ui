<template>
  <box-component :name="`${name} - 默认 Trim`">
    <p-input placeholder="请输入" v-model="value" />
    <div class="mt-10 pl-2">输入框值：[{{ value }}]</div>
  </box-component>

  <box-component :name="`${name} - Not Trim`">
    <p-input v-model="value2" :trim="false" />
    <div class="mt-10 pl-2">输入框值：[{{ value2 }}]</div>
  </box-component>

  <box-component :name="`${name} - 字数统计`">
    <p-input placeholder="请输入" v-model="value3" :trim="false" :autofocus="true" :maxlength="20" show-count />
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
</script>

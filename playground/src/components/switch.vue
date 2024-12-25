<template>
  <box-component :name="`${name}`">
    <p-switch :checked-value="1" :unchecked-value="0" v-model="value" @change="handleChange" />
    <p-switch class="ml-10" :checked-value="1" :unchecked-value="0" v-model="value" loading />
    <p-switch
      class="ml-10"
      :checked-value="1"
      :unchecked-value="0"
      v-model="value"
      :outside="false"
      checked-text="只读"
      unchecked-text="只读"
      readonly
      @change="handleChange"
    />
    <p-switch
      class="ml-10"
      :checked-value="1"
      :unchecked-value="0"
      v-model="value"
      checked-text="只读(文案在开关外)"
      unchecked-text="只读(文案在开关外)"
      readonly
      @change="handleChange"
    />
  </box-component>
</template>

<script setup>
import { ref } from 'vue'
import BoxComponent from './box-component.vue'

defineOptions({
  name: 'PSwitchWithBox'
})

const name = 'PSwitch'
const value = ref(1)

function handleChange(val) {
  console.log('🚀 ~ handleChange ~ val:', val)
}
</script>

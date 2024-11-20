<template>
  <p-config-provider>
    <p-select
      class="mb-14"
      v-model="value"
      :options="options"
      :clearable="false"
      width="200px"
      value-field="componentKey"
      label-field="componentName"
      @change="handleChange"
    />
    <component :is="components[value]" />
  </p-config-provider>
</template>

<script setup>
import { ref } from 'vue'
import Button from './components/button.vue'
import Input from './components/input.vue'
import Form from './components/form.vue'
import Table from './components/table.vue'

const components = {
  button: Button,
  input: Input,
  form: Form,
  table: Table
}
const options = [
  { componentName: 'P-Button', componentKey: 'button' },
  { componentName: 'P-Input', componentKey: 'input' },
  { componentName: 'P-Form', componentKey: 'form' },
  { componentName: 'P-Table', componentKey: 'table' }
]

const localComponentKey = window.localStorage.getItem('componentKey') || options[0].componentKey
const value = ref(localComponentKey)
function handleChange(val) {
  window.localStorage.setItem('componentKey', val)
}
</script>

<style>
#app {
  margin: 14px;
}

.flex {
  display: flex;
}

.ml-10 {
  margin-left: 10px;
}

.mt-10 {
  margin-top: 10px;
}

.mb-14 {
  margin-bottom: 14px;
}

.pl-2 {
  padding-left: 2px;
}
</style>

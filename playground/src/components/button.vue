<template>
  <box-component :name="name">
    <p-button>Primary Button</p-button>
    <p-button class="ml-10" type="error" size="tiny">Tiny Error Button</p-button>
    <p-button class="ml-10" type="default" size="small">Small Default Button</p-button>
    <p-button class="ml-10" type="success" size="large">Large Success Button</p-button>
  </box-component>

  <box-component :name="`${name} - 显示为块级`">
    <p-button type="warning" size="large" block>Block Large Warning Button</p-button>
  </box-component>
</template>

<script setup>
import BoxComponent from './box-component.vue'

defineOptions({
  name: 'PButtonWithBox'
})

const name = 'PButton'
</script>

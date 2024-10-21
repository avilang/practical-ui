<template>
  <box-component name="PButton">
    <p-button>Primary Button</p-button>
  </box-component>
</template>

<script setup>
import { PButton } from 'practical-ui'
import BoxComponent from './box-component.vue'

defineOptions({
  name: 'PButtonWithBox'
})
</script>

<template>
  <div>{{ text }}</div>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'PButton'
})

const text = ref('Hello PButton')
</script>

<script setup>
import Button from './components/button.vue'
import Input from './components/input.vue'
</script>

<template>
  <p-config-provider>
    <Button />
    <Input />
  </p-config-provider>
</template>

<style>
#app {
  margin: 14px;
}

.ml-10 {
  margin-left: 10px;
}
.mt-10 {
  margin-top: 10px;
}

.pl-2 {
  padding-left: 2px;
}
</style>

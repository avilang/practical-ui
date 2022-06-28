<script setup lang="ts">
import { PButton } from "pract/button";
</script>

<template>
  <h1 :class="$style.title">Pract UI</h1>
  <p-button />
</template>

<style module>
body {
  margin: 0;
  padding: 0;
}

.title {
  margin: 20px 0;
  font-size: 36px;
  text-align: center;
  line-height: 1;
  font-weight: 600;
}
</style>

<template>
  <div :class="{ box: true, boxWithTitle: !!name }">
    <h2 v-if="name" class="title">{{ name }}</h2>
    <div :class="{ content: true }">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: { type: String, default: '' }
})
</script>

<style scoped>
.box {
  padding: 0 14px 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
}

.box + .box {
  margin-top: 14px;
}

.title {
  margin-left: -14px;
  margin-right: -14px;
  padding-bottom: 9px;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #ccc;
  text-indent: 15px;
  background-color: #eee;
}

.box.boxWithTitle .title {
  margin-top: 0;
  padding-top: 9px;
}

.content {
  margin-top: 14px;
}
</style>

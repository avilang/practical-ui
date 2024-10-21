<template>
  <div :class="{ box: true, boxWithTitle: !!name }">
    <h2 v-if="name" class="title">{{ name }}</h2>
    <div :class="{ content: true, contentNoTitle: !name }">
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
  padding: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.box.boxWithTitle {
  padding-top: 9px;
}

.title {
  margin-left: -14px;
  margin-right: -14px;
  padding-bottom: 9px;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #ccc;
  text-indent: 15px;
}

.content {
  margin-top: 14px;
}

.content.contentNoTitle {
  margin-top: 0;
}
</style>

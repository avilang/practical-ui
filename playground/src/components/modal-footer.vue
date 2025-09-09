<template>
  <div style="width: 100%; padding: 12px 16px 12px 16px; text-align: right; border-top: 1px solid rgb(224, 224, 230)">
    <p-button type="default" size="small" @click="handleCancel">取消-异步时，需自主控制是否可以取消关闭弹出</p-button>
    <p-button size="small" class="ml-10" @click="handleOk" style="min-width: 60px">确定</p-button>
  </div>
</template>

<script setup>
const emit = defineEmits(['close', 'ok'])

function handleCancel() {
  emit('close')
}
function handleOk() {
  emit('ok')
}
</script>

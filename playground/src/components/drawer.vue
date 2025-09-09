<template>
  <box-component :name="`${name}`">
    <p-button type="default" @click="handleOpen">打开 Drawer</p-button>
  </box-component>
  <p-drawer
    v-model:show="show"
    :closable="true"
    :lock="loading"
    title="抽屉标题"
    body-content-class="p-drawer-body-cc"
    :mask-closable="true"
    :width="730"
    height="50%"
    :body-content-style="{ lineHeight: 3 }"
    :footer-style="{ padding: '12px 16px', borderTop: '1px solid rgb(224, 224, 230)' }"
  >
    <div>
      <p-input placeholder="请输入" v-model="value" />
    </div>
    <div>这是内容</div>
    <template #footer>
      <p-button type="default" size="small" :disabled="loading" style="min-width: 60px" @click="handleClose"
        >关闭</p-button
      >
      <p-button
        type="primary"
        size="small"
        :loading="loading"
        :loadingWithoutText="false"
        style="min-width: 60px; margin-left: 10px"
        @click="handleSubmit"
        >确定</p-button
      >
    </template>
  </p-drawer>
</template>

<script setup>
import { ref } from 'vue'
import BoxComponent from './box-component.vue'

defineOptions({
  name: 'DrawerWithBox'
})

const name = 'Drawer'
const show = ref(false)
const value = ref('')
const loading = ref(false)

function handleOpen() {
  show.value = true
}

function handleClose() {
  if (loading.value) {
    return
  }
  show.value = false
}

function handleSubmit() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 3000)
}
</script>

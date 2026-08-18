<template>
  <box-component :name="`${name} - 空数据`">
    <p-tree-select class="tree-select-empty" style="width: 380px" />
  </box-component>

  <box-component :name="`${name} - 单选`">
    <p-tree-select
      style="width: 600px"
      defaultExpandAll
      showPath
      clearable
      v-model="val"
      @change="handleChange"
      :options="options"
    />
    <div>{{ val }}</div>
  </box-component>

  <box-component :name="`${name} - 多选`">
    <p-tree-select style="width: 600px" multiple v-model="val2" @change="handleChange" :options="options" />
    <div>{{ val2 }}</div>
  </box-component>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BoxComponent from './box-component.vue'
import { getTree } from './tree'

defineOptions({
  name: 'PTreeSelectWithBox'
})

const name = 'PTreeSelect'
const options = ref([])
const val = ref(null)
const val2 = ref([])

function handleChange(val) {
  console.log('🚀 ~ handleChange ~ val:', val)
}

onMounted(async () => {
  options.value = await getTree()
})
</script>

<style>
.tree-select-empty {
  width: 600px !important;
}
</style>

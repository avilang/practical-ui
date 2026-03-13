<template>
  <box-component :name="`${name} - 空数据`">
    <p-cascader style="width: 200px" />
  </box-component>
  <box-component :name="`${name} - 单选`">
    <p-cascader
      style="width: 200px"
      v-model="value"
      :options="options"
      :menu-props="{ style: { '--n-column-width': '200px' } }"
      filterable
      @update="handleUpdate"
      @change="handleChange"
    />
  </box-component>
  <box-component :name="`${name} - 多选`">
    <p-cascader
      style="width: 200px"
      v-model="value2"
      multiple
      filterable
      check-strategy="child"
      :options="options"
      :menu-props="{ style: { '--n-column-width': '200px' } }"
      @change="handleChange"
    />
  </box-component>
  <box-component :name="`${name} - 控制菜单样式 - 宽度 - 这里和选择框的宽度一致`">
    <p-cascader
      style="width: 200px"
      multiple
      clearable
      :options="options"
      :menu-props="{ class: 'p-cascader-menu-width' }"
    />
    <div style="margin-top: 10px">最简单的实现方式：:menu-props="{ style: { '--n-column-width': '200px' } }"</div>
  </box-component>
  <box-component :name="`${name} - 单项异步`">
    <p-cascader
      style="width: 200px"
      :menu-props="{ style: { '--n-column-width': '200px' } }"
      remote
      :options="options2"
      :on-load="handleLoad"
    />
  </box-component>
  <box-component :name="`${name} - 多选异步`">
    <p-cascader
      style="width: 200px"
      :menu-props="{ style: { '--n-column-width': '200px' } }"
      multiple
      remote
      :options="options2"
      :on-load="handleLoad"
    />
  </box-component>
</template>

<script setup>
import { ref } from 'vue'
import BoxComponent from './box-component.vue'

defineOptions({
  name: 'PCascaderWithBox'
})

const name = 'PCascader'

function getOptions(depth = 3, iterator = 1, prefix = '') {
  const length = 12
  const options2 = []
  for (let i = 1; i <= length; ++i) {
    if (iterator === 1) {
      options2.push({
        value: `v-${i}`,
        label: `l-${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, `${String(i)}`)
      })
    } else if (iterator === depth) {
      options2.push({
        value: `v-${prefix}-${i}`,
        label: `l-${prefix}-${i}`,
        disabled: i % 5 === 0
      })
    } else {
      options2.push({
        value: `v-${prefix}-${i}`,
        label: `l-${prefix}-${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, `${prefix}-${i}`)
      })
    }
  }
  return options2
}
const options = getOptions()
const value = ref('v-1-2-3')
const value2 = ref(null)

function handleUpdate(val) {
  console.log('🚀 ~ handleUpdate ~ val:', val)
}

function handleChange(val) {
  console.log('🚀 ~ handleChange ~ val:', val)
}

const options2 = ref([
  {
    label: 'l-0',
    value: 'v-0',
    depth: 1,
    isLeaf: false
  }
])

function getChildren(option) {
  const children = []
  for (let i = 0; i <= option.depth; ++i) {
    children.push({
      label: `${option.label}-${i}`,
      value: `${option.label}-${i}`,
      depth: option.depth + 1,
      isLeaf: option.depth === 3
    })
  }
  return children
}

function handleLoad(option) {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      option.children = getChildren(option)
      resolve()
    }, 1e3)
  })
}
</script>

<style>
.p-cascader-menu-width.n-cascader-menu .n-cascader-submenu.n-cascader-submenu--virtual {
  width: 200px;
  min-width: 200px;
}

.p-cascader-menu-width.n-cascader-menu .n-cascader-option {
  min-width: 200px;
}
</style>

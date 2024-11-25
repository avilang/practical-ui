<template>
  <box-component :name="`${name} - 正确请求获取到数据`">
    <p-promised :promise="promise">
      <template v-slot="{ data }">
        {{ data }}
      </template>
    </p-promised>
    <div>
      <p-button @click="handleStart">正常加载到数据</p-button>
      <p-button class="ml-10" @click="handleStart('again')">再次加载到数据</p-button>
      <p-button class="ml-10" @click="handleStart('empty')">加载到空数据</p-button>
      <p-button class="ml-10" @click="handleStart('error')">数据异常</p-button>
    </div>
  </box-component>

  <box-component :name="`${name} - 控制 loading 位置`">
    <div style="height: 150px; position: relative">
      <p-promised :promise="promise2" content-style="height: 100%;overflow-y: auto">
        <template v-slot="{ data }">
          <ul>
            <li v-for="item in data" :key="item">
              {{ item }}
            </li>
          </ul>
        </template>
      </p-promised>
    </div>
    <div>
      <p-button @click="handleStart2">开始加载</p-button>
    </div>
  </box-component>

  <box-component :name="`${name} - 正确请求接口失败抛出错误信息`">
    <p-promised :promise="promise3">
      <template v-slot="{ data }">
        {{ data }}
      </template>
    </p-promised>
    <div>
      <p-button @click="handleStart3">开始加载</p-button>
    </div>
  </box-component>
</template>

<script setup>
import { ref } from 'vue'
import BoxComponent from './box-component.vue'

defineOptions({
  name: 'PPromisedWithBox'
})

const name = 'PPromised'

const promise = ref(null)
function handleStart(type) {
  if (type === 'again') {
    promise.value = new Promise((resolve) => {
      setTimeout(() => {
        resolve([4, 5, 6])
      }, 1000)
    })
  } else if (type === 'empty') {
    promise.value = new Promise((resolve) => {
      setTimeout(() => {
        resolve([])
      }, 2000)
    })
  } else if (type === 'error') {
    promise.value = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error())
      }, 2000)
    })
  } else {
    promise.value = new Promise((resolve) => {
      setTimeout(() => {
        resolve([1, 2, 3])
      }, 2000)
    })
  }
}

const promise2 = ref(null)
function handleStart2() {
  promise2.value = new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    }, 1000)
  })
}

const promise3 = ref(null)
function handleStart3() {
  promise3.value = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error())
    }, 1200)
  })
}
</script>

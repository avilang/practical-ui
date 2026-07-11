<template>
  <box-component :name="`${name}`">
    <p-input-identifier v-model="v" @input="onInput" @blur="onBlur" />
    <div>[{{ v }}]</div>
  </box-component>

  <box-component :name="`${name} - 自定义校验`">
    <p-input-identifier
      v-model="v2"
      :verification="customVerification"
      @input="onInput2"
      @blur="onBlur2"
      :style="{ '--n-border-radius': 0 }"
    />
    <div>[{{ v2 }}]</div>
  </box-component>
</template>

<script setup>
import { ref } from 'vue'
import BoxComponent from './box-component.vue'

defineOptions({
  name: 'PInputIdentifierWithBox'
})

const name = 'PInputIdentifier'
const v = ref('   ABCD的')
setTimeout(() => {
  v.value = ' ad_d_12  '
}, 1000)

function onInput(val) {
  console.log('🚀 ~ onInput ~ val:', val)
}

function onBlur(detail) {
  console.log('🚀 ~ onBlur ~ detail:', detail)
}

const v2 = ref('')
function customVerification(vv) {
  return /^[0-9\s]+$/.test(vv)
}

function onInput2({ value }) {
  console.log('🚀 ~ onInput2 ~ value:(' + value + ')')
}

function onBlur2({ value }) {
  console.log('🚀 ~ onBlur2 ~ value:(' + value + ')')
}
</script>

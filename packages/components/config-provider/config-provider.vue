<template>
  <n-config-provider
    preflight-style-disabled
    abstract
    inline-theme-disabled
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme-overrides="themeOverrides"
  >
    <slot></slot>
  </n-config-provider>
</template>

<script setup>
import 'vfonts/Lato.css'
import { NConfigProvider, zhCN, dateZhCN } from 'naive-ui'

defineOptions({
  name: 'PConfigProvider',
  inheritAttrs: false
})

const themeOverrides = {
  common: {
    fontWeightStrong: '600',
    primaryColor: '#2080F0FF',
    primaryColorHover: '#4098FCFF',
    primaryColorPressed: '#1060C9FF',
    primaryColorSuppl: '#4098FCFF'
  }
}
</script>

<style src="./reset.css"></style>

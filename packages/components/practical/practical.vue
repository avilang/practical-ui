<template>
  <n-config-provider
    preflight-style-disabled
    abstract
    inline-theme-disabled
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme-overrides="themeOverrides"
  >
    <n-modal-provider>
      <n-dialog-provider>
        <slot></slot>
      </n-dialog-provider>
    </n-modal-provider>
  </n-config-provider>
</template>

<script setup>
import 'vfonts/Lato.css'
import { NConfigProvider, NDialogProvider, NModalProvider, zhCN, dateZhCN } from 'naive-ui'

defineOptions({
  name: 'PPractical',
  inheritAttrs: false
})

const themeOverrides = {
  common: {
    fontWeightStrong: '600',
    primaryColor: '#2080F0FF',
    primaryColorHover: '#4098FCFF',
    primaryColorPressed: '#1060C9FF',
    primaryColorSuppl: '#4098FCFF'
  },
  DataTable: {
    thColor: 'rgba(243, 243, 252, 1)',
    tdColorStriped: 'rgba(243, 243, 252, 1)',
    tdColorHover: 'rgba(250, 250, 252, 1)'
  }
}
</script>

<style src="./reset.css"></style>

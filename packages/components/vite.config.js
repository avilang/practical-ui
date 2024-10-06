/* eslint-disable no-undef */
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'index.js'),
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue']
    }
  }
})

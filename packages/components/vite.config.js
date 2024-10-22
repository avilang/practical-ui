/* eslint-disable no-undef */
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import libAssets from '@laynezh/vite-plugin-lib-assets'

// READING https://github.com/vitejs/vite/issues/3295
export default defineConfig({
  plugins: [
    vue(),
    libAssets({
      include: /\.woff2(\?.*)?$/,
      name: '[name].[ext]'
    })
  ],
  build: {
    assetsInlineLimit: 0,
    cssCodeSplit: false,
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

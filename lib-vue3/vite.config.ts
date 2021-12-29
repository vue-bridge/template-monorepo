/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { buildConfig } from './vite.config.lib'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@vue-bridge/runtime': '@vue-bridge/runtime/vue3'
    },
  },
  build: buildConfig(),
  test: {
    environment: 'jsdom'
  }
})

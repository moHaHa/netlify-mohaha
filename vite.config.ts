import { fileURLToPath, URL } from 'node:url'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Components(),
    AutoImport({imports: ['vue']}),
    UnoCSS()
  ]
})

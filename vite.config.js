import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置别名
    alias: [
      { find: '@', replacement: resolve(__dirname, './src') },
      { find: '@views', replacement: resolve(__dirname, './src/views') },
      { find: '@layout', replacement: resolve(__dirname, './src/layout') },
    ],
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
})

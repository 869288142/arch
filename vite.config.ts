import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
      strict:false,
      // Allow serving files from one level up to the project root
      // allow: ['..']
    }
  },
  resolve: {
    alias: {
      "@":  path.resolve(__dirname, "src")
    }
  },

  plugins: [vueJsx(),vue({
    reactivityTransform: true
  })]
})

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import vueJsx from "@vitejs/plugin-vue-jsx";
import basicSsl from "@vitejs/plugin-basic-ssl";
import proxy from "vite-plugin-http2-proxy";
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  server: {
    https: {},
    fs: {
      strict: false,
    },

    // proxy: {
    //   "/api": {
    //     // jm.ajax使用
    //     target: `http://localhost:5000/`,
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace(/^\/api/, ""),
    //   },
    // },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    cssMinify: "lightningcss",
  },
  optimizeDeps: {
    holdUntilCrawlEnd: false,
  },
  css: {
    preprocessorMaxWorkers: true,
    transformer: "lightningcss",
    lightningcss: {},
  },
  plugins: [
    vueJsx(),
    vue({
      script: {
      },
    }),
    basicSsl(),
    proxy({
      "/api": {
        // jm.ajax使用
        target: `http://localhost:5000/`,
        // changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    }),
    tailwindcss(),
  ],
});

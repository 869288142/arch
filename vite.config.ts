import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import vueJsx from "@vitejs/plugin-vue-jsx";
import basicSsl from "@vitejs/plugin-basic-ssl";
import proxy from "vite-plugin-http2-proxy";
import Inspect from "vite-plugin-inspect";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {},
    fs: {
      strict: false,
      // Allow serving files from one level up to the project root
      // allow: ['..']
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
  // optimizeDeps: {
  //   disabled: false,
  // },
  // css: {
  //   transformer: "lightningcss"
  // },
  plugins: [
    vueJsx(),
    vue({
      script: {
        propsDestructure: true,
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
    Inspect({
      build: true,
      outputDir: ".vite-inspect",
    }),
  ],
});

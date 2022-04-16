import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

import jsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), jsx()],
  base: "./", // 设置打包路径
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 设置 `@` 指向 `src` 目录
    },
  },
  server: {
    port: 3651, // 设置服务启动端口号
    // open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
  },
});

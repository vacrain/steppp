/*
 * @Author: vacrain
 * @Date: 2022-04-17 13:41:29
 * @LastEditors: vacrain
 * @LastEditTime: 2022-04-23 09:12:57
 * @FilePath: /naive-ui-steppp/vite.config.ts
 * @Description:
 *
 * Copyright (c) 2022 by notia, All Rights Reserved.
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    root: __dirname,
    resolve: {
        alias: {
            "@": resolve("./src"),
        },
    },
    plugins: [vue()],
});

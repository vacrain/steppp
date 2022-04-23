/*
 * @Author: vacrain
 * @Date: 2022-04-17 13:41:29
 * @LastEditors: vacrain
 * @LastEditTime: 2022-04-23 10:15:13
 * @FilePath: /naive-ui-steppp/src/main.ts
 * @Description:
 *
 */
// global
import { createApp } from "vue";
import naiveUI from "naive-ui";
// 导入构造函数
import { createPinia } from "pinia";

// local
import Provider from "@/base/layout/sysProvider.vue";
import router from "@/base/entry/router";

// 创建Vue应用实例app
const appProvider = createApp(Provider);

// 实例化 Pinia
const pinia = createPinia();

appProvider.use(router);
appProvider.use(naiveUI);
appProvider.use(pinia);
appProvider.mount("#app");

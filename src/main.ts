/*
 * @Author: vacrain
 * @Date: 2022-04-17 13:41:29
 * @LastEditors: vacrain
 * @LastEditTime: 2022-04-22 21:18:57
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
import Provider from "@/base/sysVue/appProvider.vue";
import router from "@/base/config/router";

// 创建Vue应用实例app
const appProvider = createApp(Provider);

// 实例化 Pinia
const pinia = createPinia();

appProvider.use(router);
appProvider.use(naiveUI);
// 应用以插件形式挂载Pinia实例
appProvider.use(pinia);
appProvider.mount("#app");

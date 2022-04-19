// dependence
import { createApp } from "vue";
import naiveUI from "naive-ui";

// local
import Provider from "./base/sysVue/appProvider.vue";
import router from "@/base/config/router";

// 挂载实例
createApp(Provider).use(router).use(naiveUI).mount("#app");

// package.json
import { createApp } from "vue";
import naiveUI from "naive-ui";

// local
import Provider from "./base/view/provider.vue";
import router from "@/base/config/router";

//
createApp(Provider).use(router).use(naiveUI).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import naiveUI from "naive-ui";
import router from "./router/index";
import provider from "./components/provider.vue";

createApp(provider).use(router).use(naiveUI).mount("#app");

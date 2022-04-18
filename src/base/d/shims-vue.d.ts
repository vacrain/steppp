// 没有本文件，就不能 import App from "./App.vue"; 会报错的，因为不识别.vue文件
declare module "*.vue" {
    import { DefineComponent } from "vue";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

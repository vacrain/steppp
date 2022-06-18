/*
 * @Author: vacrain
 * @Date: 2022-04-30 07:58:35
 * @LastEditors: vacrain
 * @LastEditTime: 2022-04-30 15:51:35
 * @FilePath: /steppp/src/base/typings/shims-vue.d.ts
 * @Description:
 *
 */
// 没有本文件，就不能 import App from "./App.vue"; 会报错的，因为不识别.vue文件
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

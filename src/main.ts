/*
 * @Author: vacrain
 * @Date: 2022-04-17 13:41:29
 * @LastEditors: vacrain
 * @LastEditTime: 2022-05-01 11:25:40
 * @FilePath: /steppp/src/main.ts
 * @Description:
 *
 */
// dependence
import { createApp } from 'vue'
import naiveUI from 'naive-ui'
import { createPinia } from 'pinia'

// configuration
import Provider from '@/base/Provider/appProvider.vue'
import router from '@/base/entry/router'

// 实例化
const appProvider = createApp(Provider)
const pinia = createPinia()

// 挂载
appProvider.use(router)
appProvider.use(naiveUI)
appProvider.use(pinia)
appProvider.mount('#app')
// await setTimeout(() => {
//     appProvider.mount('#app')
// }, 5555)

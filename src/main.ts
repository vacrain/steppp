/*
 * @Author: vacrain
 * @Date: 2022-04-17 13:41:29
 * @LastEditors: yhq
 * @LastEditTime: 2022-05-10 13:59:56
 * @FilePath: \naive-ui-steppp\src\main.ts
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
import { mainStore } from '@/base/entry/store'
const store = mainStore
// 实例化
const appProvider = createApp(Provider)
const pinia = createPinia()
// 全局挂载
appProvider.config.globalProperties.$store = store
appProvider.config.globalProperties.$router = router
appProvider.config.globalProperties.$pathname = window.location.pathname
// 挂载
appProvider.use(router)
appProvider.use(naiveUI)
appProvider.use(pinia)
appProvider.mount('#app')
// await setTimeout(() => {
//     appProvider.mount('#app')
// }, 5555)

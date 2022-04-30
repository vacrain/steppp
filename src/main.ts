/*
 * @Author: vacrain
 * @Date: 2022-04-17 13:41:29
 * @LastEditors: vacrain
 * @LastEditTime: 2022-04-30 15:40:08
 * @FilePath: /steppp/src/main.ts
 * @Description:
 *
 */
// global
import { createApp } from 'vue'
import naiveUI from 'naive-ui'
import { createPinia } from 'pinia'

// local
import Provider from '@/base/layout/sysProvider.vue'
import router from '@/base/entry/router'

// 实例化
const appProvider = createApp(Provider)
const pinia = createPinia()

// 挂载
appProvider.use(router)
appProvider.use(naiveUI)
appProvider.use(pinia)
appProvider.mount('#app')

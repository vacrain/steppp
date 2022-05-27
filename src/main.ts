/*
 * @Author: vacrain
 * @Date: 2022-04-17 13:41:29
 * @LastEditors: yhq
 * @LastEditTime: 2022-05-27 16:49:49
 * @FilePath: /steppp/src/main.ts
 * @Description:
 *
 */
// dependence
import { createApp } from 'vue'
import naiveUI from 'naive-ui'
import { createPinia } from 'pinia'
// 国际化注册
import i18n from '@/base/i18n/index'
import { useI18n } from 'vue-i18n'
// configuration
import App from './App.vue'
import router from '@/base/entry/router'
import { mainStore } from '@/base/entry/store'
import api from '@/api'

const store = mainStore
// 实例化
const appProvider = createApp(App)
const pinia = createPinia()
// 全局挂载
appProvider.config.globalProperties.$store = store
appProvider.config.globalProperties.$router = router
appProvider.config.globalProperties.$api = api
appProvider.config.globalProperties.$useI18n = useI18n

// 挂载
appProvider.use(router)
appProvider.use(i18n)
appProvider.use(naiveUI)
appProvider.use(pinia)
appProvider.mount('#app')

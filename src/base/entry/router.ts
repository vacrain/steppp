/*
 * @Author: vacrain
 * @Date: 2022-04-17 14:23:14
 * @LastEditors: vacrain
 * @LastEditTime: 2022-05-01 11:24:59
 * @FilePath: /steppp/src/base/entry/router.ts
 * @Description:
 *
 */
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/playground/home/homeMain.vue'
import Vue3 from '@/playground/vue3/vue3Main.vue'

const menuList: any = []

// const modules = import.meta.glob('@/playground/**')
// const routes2: any = []

// for (const path in modules) {
//     modules[path]().then(mod => {
//         if (mod.routePath) {
//             routes2.push({
//                 path: mod.routePath,
//                 component: mod.default,
//             })
//         }
//         if (mod.menuName) {
//             menuList.push({
//                 label: mod.menuName,
//                 key: mod.routePath,
//             })
//         }
//     })
// }

// const modules = import.meta.globEager('@/playground/**')
// console.log(modules)
// const routes2: any = []
// for (const path in modules) {
//     const comp = modules[path]
//     console.log(comp)
// }

const routes1: any = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/vue',
        component: Vue3,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes1,
})

export default router

export const MENU_ITEMS: any = menuList

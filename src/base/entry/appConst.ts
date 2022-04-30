/*
 * @Author: vacrain
 * @Date: 2022-04-17 16:03:52
 * @LastEditors: vacrain
 * @LastEditTime: 2022-04-30 15:41:29
 * @FilePath: /steppp/src/base/entry/appConst.ts
 * @Description:
 *
 */

// app settings
export const APP_NAME = 'Steppp'
export const APP_VERSION = '0.0.0'

// const modules = import.meta.glob('@/spec/**')
import Home from '@/spec/home/homeMain.vue'
// console.log(modules);

// path：默认 /field/route
// isMenu:  1一级菜单 2二级菜单 默认 不是菜单
export const ROUTE_LIST = [
    // home
    { component: Home, path: '/', isMenu: 1 },

    // field1
    // { component: Field1, path: null, isMenu: 1 },

    // // vue3
    // { component: Vue3, path: null, isMenu: 1 },
]

// 根据route-list生成menu-items
// const MENU_ITEMS = [];

export const MENU_ITEMS = [
    {
        label: 'Home',
        key: '/',
    },
    {
        label: 'Field1',
        key: '/field1',
    },
]

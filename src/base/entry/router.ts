/*
 * @Author: vacrain
 * @Date: 2022-04-17 14:23:14
 * @LastEditors: yhq
 * @LastEditTime: 2022-05-07 17:34:36
 * @FilePath: \naive-ui-steppp\src\base\entry\router.ts
 * @Description:
 *
 */
import { createRouter, createWebHistory } from 'vue-router'

import appInfo from './appConst'
import { getMenu } from '@/base/utils/getRoutesMenu'
const nowEndIndex = Number(sessionStorage.getItem('whichEnd'))
const menuList: any = appInfo[nowEndIndex].menuItem || []
let routes: any = []
routes = getMenu(menuList)
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router

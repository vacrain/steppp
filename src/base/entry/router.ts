/*
 * @Author: vacrain
 * @Date: 2022-04-17 14:23:14
 * @LastEditors: yhq
 * @LastEditTime: 2022-05-13 16:45:00
 * @FilePath: \naive-ui-steppp\src\base\entry\router.ts
 * @Description:
 *
 */
import { createRouter, createWebHistory } from 'vue-router'

import { getEndList } from './appConst'
import { getMenu, getBreadRouteList } from '@/base/utils/getRoutesMenu'

const nowEnd = sessionStorage.getItem('whichEnd') || 'playground'
const menuList: any = getEndList(nowEnd)?.menuItem || []
const endRootPath: any = getEndList(nowEnd)?.endRootPath || ''

const routes: any = getMenu(menuList, endRootPath) || []
const router = createRouter({
    history: createWebHistory(),
    routes,
})
// 面包屑赋值
router.beforeEach((to: any, from: any, next: any) => {
    const routeInfo = to.matched[0] || {}
    // 面包屑显示赋值
    if (routeInfo.name) {
        const obj = {
            name: routeInfo.name,
            path: routeInfo.path,
            children: routeInfo.children, //面包屑二级
        }
        sessionStorage.setItem('breadInfo', JSON.stringify(obj))
    }
    // 面包屑 路由赋值
    const breadList = getBreadRouteList(
        menuList,
        sessionStorage.getItem('nowMenuItemPath') || ''
    )
    sessionStorage.setItem('breadList', JSON.stringify(breadList))
    next()
})
export default router

/*
 * @Author: vacrain
 * @Date: 2022-04-17 14:23:14
 * @LastEditors: yhq
 * @LastEditTime: 2022-05-25 18:13:42
 * @FilePath: \naive-ui-steppp\src\base\entry\router.ts
 * @Description:
 *
 */
import { createRouter, createWebHistory } from 'vue-router'
import { getRoute, setBreadInfo, getSeItem } from '@/base/utils'
import { whiteList } from '@/base/entry/app-const'
const routes: any = [
    {
        name: 'login',
        path: '/login',
        component: () => import('@/base/layout/layout-login.vue'),
    },
    ...getRoute(),
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
router.beforeEach((to: any, from: any, next: any) => {
    // 面包屑显示赋值
    setBreadInfo(to)
    if (!whiteList.includes(to.path) && !getSeItem('token')) {
        next('/login')
    } else {
        next()
    }
})
export default router

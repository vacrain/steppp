/*
 * @Author: vacrain
 * @Date: 2022-04-17 14:23:14
 * @LastEditors: yhq
 * @LastEditTime: 2022-05-24 18:09:56
 * @FilePath: \naive-ui-steppp\src\base\entry\router.ts
 * @Description:
 *
 */
import { createRouter, createWebHistory } from 'vue-router'
import { getRoute, setBreadInfo } from '@/base/utils'
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
// 白名单
const whiteList = ['/login']
router.beforeEach((to: any, from: any, next: any) => {
    // 面包屑显示赋值
    setBreadInfo(to)
    if (!whiteList.includes(to.path) && !sessionStorage.getItem('token')) {
        next('/login')
    } else {
        next()
    }
})
export default router

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
import { getEndInfo } from './app-const'
import { getRoute, getBreadRoute } from '@/base/utils'
// 哪个端
const nowEnd = sessionStorage.getItem('whichEnd') || 'playground'
// 文件列表
const fileList: any = getEndInfo(nowEnd)?.fileList || []
// 端的根文件夹名
const endRootPath: any = getEndInfo(nowEnd)?.endRootPath || ''
const routes: any = getRoute(fileList, endRootPath) || []
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
    const breadList = getBreadRoute(
        fileList,
        sessionStorage.getItem('nowMenuItemPath') || ''
    )
    sessionStorage.setItem('breadList', JSON.stringify(breadList))
    next()
})
export default router

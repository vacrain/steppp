/*
 * @Author: yhq
 * @Date: 2022-05-09 16:22:59
 * @LastEditTime: 2022-05-30 14:14:19
 * @LastEditors: yhq
 * @Description:
 * @FilePath: /steppp/src/base/utils/menu/index.ts
 *
 */
import Storage from '@/base/utils/storage'

// 左侧菜单赋值判断 和路由不产生联系
export function getMenuList(arr: any) {
    const menuArr: any = []
    arr.map((item: any) => {
        if (!item.notMenuShow) {
            if (item.children && item.children.length != 0) {
                item.children = getMenuList(item.children)
            }
            menuArr.push(item)
        }
        if (item.children && item.children.length == 0) {
            delete item.children
        }
    })
    return menuArr
}
// 面包屑赋值
export function setBreadInfo(to: any) {
    let routeInfo: any = {}
    const nowMenuItemPath = Storage.getSessionItem('nowMenuItemPath')
    to.matched &&
        to.matched.map((item: any) => {
            if (item.path == nowMenuItemPath) {
                routeInfo = item
            } else if (!nowMenuItemPath) {
                //页面初始时是没有nowMenuItemPath的，这时要取最后一个
                routeInfo = item
            }
        })
    if (routeInfo.name) {
        const obj = {
            name: routeInfo.name,
            path: routeInfo.path,
            children: routeInfo.children, //面包屑二级
        }
        Storage.setSessionItem('breadInfo', JSON.stringify(obj))
    }
}

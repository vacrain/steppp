/*
 * @Author: yhq
 * @Date: 2022-05-07 17:22:42
 * @LastEditTime: 2022-05-30 14:35:37
 * @LastEditors: yhq
 * @Description:
 * @FilePath: /steppp/src/base/utils/router/index.ts
 *
 */
// 路由入口文件以 **main.vue为结尾的
const mainComps = import.meta.glob('@/**/**/**main.vue')
const layoutComps = import.meta.glob('@/**/**/layout**.vue')
import { getEndInfo } from '@/base/entry/app-const'
import Storage from '@/base/utils/storage'
// 哪个端
const nowEnd = Storage.getSessionItem('whichEnd') || 'playground'
const endInfo = getEndInfo(nowEnd)
// 文件列表
const fileList: any = endInfo?.fileList || []
const homePath: any = endInfo?.homePath || ''
// 端的根文件夹名
const endRootPath: any = endInfo?.endRootPath || ''
export function getRoute() {
    return [
        {
            name: 'Home',
            path: '/',
            component: layoutComps[`../../../${homePath}.vue`],
            children: getChildrenRoute(),
        },
    ]
}
// 总组件路由赋值
function getChildrenRoute(arr?: any, flag?: boolean) {
    const menuArr: any = []
    const fileArr: any = flag ? arr : fileList
    fileArr.map((item: any) => {
        const obj = {
            name: item.label,
            path: item.key,
            component:
                mainComps[
                    `../../../${endRootPath}/${item.folderName}/${item.fileName}.vue`
                ],
            children: [],
        }
        if (item.children && item.children.length != 0) {
            obj.children = getChildrenRoute(item.children, true)
        }
        menuArr.push(obj)
    })
    return menuArr
}

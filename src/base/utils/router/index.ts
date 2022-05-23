/*
 * @Author: yhq
 * @Date: 2022-05-07 17:22:42
 * @LastEditTime: 2022-05-23 17:25:57
 * @LastEditors: yhq
 * @Description:
 * @FilePath: \naive-ui-steppp\src\base\utils\router\index.ts
 *
 */
// 路由入口文件以 **main.vue为结尾的
const mainComps = import.meta.glob('@/**/**/**main.vue')
// 总组件路由赋值
export function getRoute(arr: any, endRootPath: any) {
    const menuArr: any = []
    arr.map((item: any) => {
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
            obj.children = getRoute(item.children, endRootPath)
        }
        menuArr.push(obj)
    })
    return menuArr
}
// 面包屑路由赋值判断
export function getBreadRoute(arr: any, nowPath: string) {
    const menuArr: any = []
    arr.map((item: any) => {
        if (item.key == nowPath) {
            if (item.children && item.children.length != 0) {
                item.children.map((item1: any) => {
                    if (item1.notMenuShow) {
                        menuArr.push(item1)
                    }
                })
            }
        }
        if (item.children && item.children.length != 0) {
            getBreadRoute(item.children, nowPath)
        }
    })
    return menuArr
}

/*
 * @Author: yhq
 * @Date: 2022-05-09 16:22:59
 * @LastEditTime: 2022-05-23 17:26:39
 * @LastEditors: yhq
 * @Description:
 * @FilePath: \naive-ui-steppp\src\base\utils\menu\index.ts
 *
 */
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

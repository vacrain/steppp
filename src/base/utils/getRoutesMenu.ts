/*
 * @Author: yhq
 * @Date: 2022-05-07 17:22:42
 * @LastEditTime: 2022-05-09 16:14:03
 * @LastEditors: yhq
 * @Description:
 * @FilePath: \naive-ui-steppp\src\base\utils\getRoutesMenu.ts
 *
 */
// 路由入口文件以 **Main.vue为结尾的
const mainComps = import.meta.glob('@/**/**/**Main.vue')
export function getMenu(arr: any) {
    const menuArr: any = []
    arr.map((item: any) => {
        const obj = {
            name: item.label,
            path: item.key,
            component:
                mainComps[`../../${item.rootPath}/${item.compNamePath}.vue`],
            children: [],
        }
        if (item.children && item.children.length != 0) {
            obj.children = getMenu(item.children)
        }
        menuArr.push(obj)
    })
    return menuArr
}

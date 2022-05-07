/*
 * @Author: vacrain
 * @Date: 2022-04-17 16:03:52
 * @LastEditors: yhq
 * @LastEditTime: 2022-05-07 18:04:01
 * @FilePath: \naive-ui-steppp\src\base\entry\appConst.ts
 * @Description:
 *
 */
// compNamePath 是根据playground 的文件位置 去赋值的，如果地址错误，则路由不会跳转
const playground = {
    appName: 'Steppp',
    appVersion: '0.0.0',
    menuItem: [
        {
            label: 'Home',
            key: '/',
            compNamePath: 'home/homeMain',
        },
        {
            label: 'Vue3',
            key: '/vue',
            compNamePath: 'vue3/vue3Main',
        },
        {
            label: 'NaiveUI',
            key: '/naive_ui',
            compNamePath: 'naiveUI/naiveUIMain',
            children: [
                {
                    label: 'table',
                    key: '/naive_ui/naive_table',
                    compNamePath: 'naiveUI/naiveTable/tableMain',
                },
                {
                    label: 'form',
                    key: '/naive_ui/naive_form',
                    compNamePath: 'naiveUI/naiveForm/formMain',
                },
                {
                    label: 'menuTest',
                    key: '/naive_ui/menuTest',
                    compNamePath: 'naiveUI/menuTest/menuMain',
                    children: [
                        {
                            label: 'menuTest3-2',
                            key: '/naive_ui/menuTest/menuTest2',
                            compNamePath:
                                'naiveUI/menuTest/menuTest2/menuTest2Main',
                        },
                    ],
                },
            ],
        },
    ],
}
const web1 = {
    appName: '',
    appVersion: '0.0.0',
    menuItem: [],
}
const endList = [playground, web1]
export default endList

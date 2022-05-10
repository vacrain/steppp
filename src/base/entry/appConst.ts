/*
 * @Author: vacrain
 * @Date: 2022-04-17 16:03:52
 * @LastEditors: yhq
 * @LastEditTime: 2022-05-09 16:24:44
 * @FilePath: \naive-ui-steppp\src\base\entry\appConst.ts
 * @Description:
 *
 */
// compNamePath 是根据playground 的文件位置 去赋值的，如果地址错误，则路由不会跳转
// notMenuShow 如果为 true 则 左侧菜单不显示
const playground = {
    appName: 'Steppp',
    appVersion: '0.0.0',
    menuItem: [
        {
            label: 'Home',
            key: '/',
            rootPath: 'playground',
            compNamePath: 'home/homeMain',
        },
        {
            label: 'Vue3',
            key: '/vue',
            rootPath: 'playground',
            compNamePath: 'vue3/vue3Main',
            children: [
                {
                    label: 'Vue3基本使用',
                    key: '/vue_basic_usage',
                    rootPath: 'playground',
                    compNamePath: 'vue3/basicUsage/vueBasicUsageMain',
                    notMenuShow: true,
                },
                {
                    label: 'Vue3新特性',
                    key: '/vue_new_features',
                    rootPath: 'playground',
                    compNamePath: 'vue3/newFeatures/vueNewFeaturesMain',
                    notMenuShow: true,
                },
            ],
        },
        {
            label: 'NaiveUI',
            key: '/naive_ui',
            rootPath: 'playground',
            compNamePath: 'naiveUI/naiveUIMain',
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

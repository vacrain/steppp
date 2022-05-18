/*
 * @Author: vacrain
 * @Date: 2022-04-17 16:03:52
 * @LastEditors: yhq
 * @LastEditTime: 2022-05-13 15:43:07
 * @FilePath: \naive-ui-steppp\src\base\entry\appConst.ts
 * @Description:
 *
 */
// fileName 文件名
// folderName 文件夹名
// endRootPath 哪个端的根文件夹名
// key 路由地址
// label 页面展示的名称
// notMenuShow 如果为 true 则 左侧菜单不显示

function getEndList(nowEnd: string) {
    const playground = {
        appName: 'Steppp',
        appVersion: '0.0.0',
        endRootPath: 'playground',
        fileList: [
            {
                label: 'Home',
                key: '/',
                folderName: 'home',
                fileName: 'homeMain',
            },
            {
                label: 'Vue3',
                key: '/vue',
                folderName: 'vue3',
                fileName: 'vue3Main',
                children: [
                    {
                        label: 'Vue3基本使用',
                        key: '/vue_basic_usage',
                        folderName: 'vue3/basicUsage',
                        fileName: 'vueBasicUsageMain',
                        notMenuShow: true,
                    },
                    {
                        label: 'Vue3新特性',
                        key: '/vue_new_features',
                        folderName: 'vue3/newFeatures',
                        fileName: 'vueNewFeaturesMain',
                        notMenuShow: true,
                    },
                ],
            },
            {
                label: 'NaiveUI',
                key: '/naive_ui',
                folderName: 'naiveUI',
                fileName: 'naiveUIMain',
                children: [
                    {
                        label: 'naiveUI表单',
                        key: '/naive_ui_form',
                        folderName: 'naiveUI/naiveForm',
                        fileName: 'formMain',
                        notMenuShow: true,
                    },
                    {
                        label: 'naiveUI表格',
                        key: '/naive_ui_table',
                        folderName: 'naiveUI/naiveTable',
                        fileName: 'tableMain',
                        notMenuShow: true,
                    },
                ],
            },
        ],
    }
    const web = {
        appName: '',
        appVersion: '0.0.0',
        endRootPath: 'web',
        fileList: [
            {
                label: 'Home',
                key: '/',
                folderName: 'home',
                fileName: 'homeMain',
            },
        ],
    }
    switch (nowEnd) {
        case 'playground':
            return playground
        case 'web':
            return web
    }
}
const LANG_TYPE_ZH_CN = 0 //国际化中文
const LANG_TYPE_EN_US = 1 //国际化英文
export { getEndList, LANG_TYPE_ZH_CN, LANG_TYPE_EN_US }

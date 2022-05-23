/*
 * @Author: vacrain
 * @Date: 2022-04-17 16:03:52
 * @LastEditors: yhq
 * @LastEditTime: 2022-05-23 17:47:23
 * @FilePath: \naive-ui-steppp\src\base\entry\app-const.ts
 * @Description:
 *
 */

/*
 fileName 文件名
 folderName 文件夹名
 endRootPath 哪个端的根文件夹名
 key 路由地址
 label 页面展示的名称
 notMenuShow 如果为 true 则 左侧菜单不显示
*/

function getEndInfo(nowEnd: string) {
    const playground = {
        appName: 'Steppp',
        appVersion: '0.0.0',
        endRootPath: 'view-playground',
        fileList: [
            {
                label: 'Home',
                key: '/',
                folderName: 'home',
                fileName: 'base-main',
            },
            {
                label: 'Vue3',
                key: '/vue',
                folderName: 'vue3',
                fileName: 'base-main',
                children: [
                    {
                        label: 'Vue3基本使用',
                        key: '/vue_basic_usage',
                        folderName: 'vue3/sub-module',
                        fileName: 'basic-usage-main',
                        notMenuShow: true,
                    },
                    {
                        label: 'Vue3新特性',
                        key: '/vue_new_features',
                        folderName: 'vue3/sub-module',
                        fileName: 'new-features-main',
                        notMenuShow: true,
                    },
                ],
            },
            {
                label: 'NaiveUI',
                key: '/naive_ui',
                folderName: 'naive-ui',
                fileName: 'base-main',
                children: [
                    {
                        label: 'naiveUI表单',
                        key: '/naive_ui_form',
                        folderName: 'naive-ui/sub-module',
                        fileName: 'base-form-main',
                        notMenuShow: true,
                    },
                    {
                        label: 'naiveUI表格',
                        key: '/naive_ui_table',
                        folderName: 'naive-ui/sub-module',
                        fileName: 'base-table-main',
                        notMenuShow: true,
                    },
                ],
            },
        ],
    }
    const web = {
        appName: '',
        appVersion: '0.0.0',
        endRootPath: 'view-web',
        fileList: [
            {
                label: 'Home',
                key: '/',
                folderName: 'home',
                fileName: 'base-main',
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
export { getEndInfo, LANG_TYPE_ZH_CN, LANG_TYPE_EN_US }

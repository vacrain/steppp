/*
 * @Author: vacrain
 * @Date: 2022-04-30 07:58:35
 * @LastEditors: yhq
 * @LastEditTime: 2022-05-30 14:12:14
 * @FilePath: /steppp/src/base/hooks/use-config.ts
 * @Description:
 *
 */
import { enUS, zhCN, darkTheme, GlobalTheme, useOsTheme } from 'naive-ui'
import { ref } from 'vue'
import i18n from '@/base/i18n/index'
import Storage from '@/base/utils/storage'

const theme = ref<GlobalTheme | null>(
    Storage.getSessionItem('theme') == 'dark' ? darkTheme : null
)
const lang = ref(zhCN)
export const useConfig = () => {
    const changeTheme = (flag: boolean) => {
        if (flag) {
            theme.value = darkTheme as GlobalTheme
        } else {
            theme.value = null
        }
        Storage.setSessionItem('theme', theme.value?.name || 'light')
    }
    const changeLang = () => {
        let nowLang = 'zh_CN'
        if (lang.value.name === 'zh-CN') {
            lang.value = enUS
            nowLang = 'en_US'
        } else {
            lang.value = zhCN
            nowLang = 'zh_CN'
        }
        i18n.global.locale = nowLang
    }
    const setOsTheme = (flag: boolean) => {
        if (flag) {
            theme.value = useOsTheme().value == 'dark' ? darkTheme : null
            Storage.setSessionItem('theme', theme.value?.name || 'light')
        }
        Storage.setSessionItem('useOsTheme', flag ? '1' : '')
    }
    return {
        theme,
        lang,
        changeTheme,
        changeLang,
        setOsTheme,
    }
}

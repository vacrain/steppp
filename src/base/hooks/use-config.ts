/*
 * @Author: vacrain
 * @Date: 2022-04-30 07:58:35
 * @LastEditors: yhq
 * @LastEditTime: 2022-05-26 17:38:09
 * @FilePath: /steppp/src/base/hooks/use-config.ts
 * @Description:
 *
 */
import { enUS, zhCN, darkTheme, GlobalTheme, useOsTheme } from 'naive-ui'
import { ref } from 'vue'
import i18n from '@/base/i18n/index'
import { setSeItem, getSeItem } from '@/base/utils'
const theme = ref<GlobalTheme | null>(
    getSeItem('theme') == 'dark' ? darkTheme : null
)
const lang = ref(zhCN)
export const useConfig = () => {
    const changeTheme = (flag: boolean) => {
        if (flag) {
            theme.value = darkTheme as GlobalTheme
        } else {
            theme.value = null
        }
        setSeItem('theme', theme.value?.name || 'light')
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
            setSeItem('theme', theme.value?.name || 'light')
        }
        setSeItem('useOsTheme', flag ? '1' : '')
    }
    return {
        theme,
        lang,
        changeTheme,
        changeLang,
        setOsTheme,
    }
}

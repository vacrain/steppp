/*
 * @Author: vacrain
 * @Date: 2022-04-30 07:58:35
 * @LastEditors: vacrain
 * @LastEditTime: 2022-04-30 15:48:06
 * @FilePath: /steppp/src/base/hooks/useConfig.ts
 * @Description:
 *
 */
import { enUS, zhCN, darkTheme, GlobalTheme } from 'naive-ui'
import { ref } from 'vue'
import i18n from '@/base/i18n/lang'
const theme = ref<GlobalTheme | null>(null)
const lang = ref(zhCN)

export const useConfig = () => {
    const changeTheme = () => {
        if (theme.value === null) {
            theme.value = darkTheme as GlobalTheme
        } else {
            theme.value = null
        }
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
    return {
        theme,
        lang,
        changeTheme,
        changeLang,
    }
}

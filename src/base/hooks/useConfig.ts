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
        console.log('lang', lang.value)
        if (lang.value.name === 'zh-CN') {
            lang.value = enUS
        } else {
            lang.value = zhCN
        }
    }
    return {
        theme,
        lang,
        changeTheme,
        changeLang,
    }
}

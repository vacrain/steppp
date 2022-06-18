import { createI18n } from 'vue-i18n'
import { LANG_TYPE_ZH_CN, LANG_TYPE_EN_US } from '@/base/entry/app-const'
import { getLang } from '@/base/utils'
// 自定义国际化文件
const i18n = createI18n({
  locale: 'zh_CN', // 默认语言
  messages: {
    // 语言库
    zh_CN: getLang(LANG_TYPE_ZH_CN),
    en_US: getLang(LANG_TYPE_EN_US),
  },
})

// 将i18n暴露出去，在main.js中挂载
export default i18n

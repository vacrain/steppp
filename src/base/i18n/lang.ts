import { createI18n } from 'vue-i18n'

//自定义国际化文件
import zh_CN from './zh_CN'
import en_US from './en_US'
const i18n = createI18n({
    locale: 'zh_CN', //默认语言
    messages: {
        //语言库
        zh_CN: zh_CN,
        en_US: en_US,
    },
})

// 将i18n暴露出去，在main.js中挂载
export default i18n

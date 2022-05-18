import lang from '@/base/i18n/lang'
// 对获取的语言进行  key值转换 满足i18n的格式
function getLang(langVal: any) {
    const langObject: any = {}
    for (const [key, val] of Object.entries(lang)) {
        langObject[key] = val[langVal]
    }
    return langObject
}
export { getLang }

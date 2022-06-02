/*
 * @Author: vacrain
 * @Date: 2022-05-19 21:56:48
 * @LastEditors: vacrain
 * @LastEditTime: 2022-06-02 07:37:32
 * @FilePath: /steppp-monorepo/app/quan/src/base/utils/i18n/index.ts
 * @Description:
 *
 */
/* eslint-disable no-restricted-syntax */
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

/*
 * @Author: yhq
 * @Date: 2022-05-25 17:57:03
 * @LastEditTime: 2022-05-25 18:02:35
 * @LastEditors: yhq
 * @Description:
 * @FilePath: \naive-ui-steppp\src\base\utils\storage\index.ts
 *
 */

export function getSeItem(key: string) {
    return sessionStorage.getItem(key)
}
export function setSeItem(key: string, val: any) {
    sessionStorage.setItem(key, val)
}
export function getLoItem(key: string) {
    return localStorage.getItem(key)
}
export function setLoItem(key: string, val: any) {
    localStorage.setItem(key, val)
}
export function clearSeItem() {
    sessionStorage.clear()
}
export function clearLoItem() {
    sessionStorage.clear()
}

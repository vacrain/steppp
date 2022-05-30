/*
 * @Author: yhq
 * @Date: 2022-05-25 17:57:03
 * @LastEditTime: 2022-05-30 14:36:05
 * @LastEditors: yhq
 * @Description:
 * @FilePath: /steppp/src/base/utils/storage/index.ts
 *
 */
class Storage {
    private constructor() {
        return
    }
    private static instance: Storage
    public static getInstance(): Storage {
        if (this.instance === undefined) {
            this.instance = new Storage()
        }
        return this.instance
    }
    getSessionItem(key: string) {
        return sessionStorage.getItem(key)
    }
    setSessionItem(key: string, val: any) {
        sessionStorage.setItem(key, val)
    }
    getlocalItem(key: string) {
        return localStorage.getItem(key)
    }
    setlocalItem(key: string, val: any) {
        localStorage.setItem(key, val)
    }
    clearSessionItem() {
        sessionStorage.clear()
    }
    clearLocalItem() {
        localStorage.clear()
    }
}
export default Storage.getInstance()

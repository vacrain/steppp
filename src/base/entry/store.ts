/*
 * @Author: vacrain
 * @Date: 2022-04-22 20:13:01
 * @LastEditors: yhq
 * @LastEditTime: 2022-05-25 18:01:19
 * @FilePath: \naive-ui-steppp\src\base\entry\store.ts
 * @Description:
 *
 */

// 引入仓库定义函数
import { defineStore } from 'pinia'
import { getEndInfo } from './app-const'
const pinia_store = {
    msg: 'hello pinia!',
    getEndInfo,
}

// 传入2个参数，定义仓库并导出
// 第一个参数唯一不可重复，字符串类型，作为仓库ID以区分仓库.....就是name-space
// 第二个参数，以对象形式配置仓库的state,getters,actions
// 配置 state getters actions
export const mainStore = defineStore('main', {
    // state 类似组件的data选项，函数形式返回对象
    state: () => pinia_store,
    getters: {},
    actions: {},
})

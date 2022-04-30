/*
 * @Author: vacrain
 * @Date: 2022-04-27 04:46:46
 * @LastEditors: vacrain
 * @LastEditTime: 2022-04-27 12:33:20
 * @FilePath: /pnpm-init-vite-latest/mock/index.ts
 * @Description:
 *
 */

import { MockMethod } from 'vite-plugin-mock'
import { mock } from 'mockjs'

const info = mock({
    // 'name|10': [() => Random.cname()] // 第一种方法
    'name|10': ['@cname'], // 第二种方法，无区别
})
export default [
    {
        url: '/api/get',
        method: 'get',
        response: () => {
            return {
                code: 200,
                dev: 'dev yeah!',
                info,
            }
        },
    },
    {
        url: '/api/getProduct',
        method: 'get',
        response: () => {
            return {
                code: 200,
                produt: 'product yeah!',
            }
        },
    },
] as MockMethod[]

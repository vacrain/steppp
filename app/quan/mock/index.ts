/*
 * @Author: vacrain
 * @Date: 2022-04-27 04:46:46
 * @LastEditors: vacrain
 * @LastEditTime: 2022-06-02 07:35:47
 * @FilePath: /steppp-monorepo/app/quan/mock/index.ts
 * @Description:
 *
 */

import { MockMethod } from 'vite-plugin-mock'
import { mock } from 'mockjs'

const info = mock({
  // 'name|10': [() => Random.cname()] // 第一种方法
  'name|10': ['@cname'], // 第二种方法，无区别
})
interface temHeader {
  headers: any
  body: any
  url: string
  query: any
}
export default [
  {
    url: '/api/get',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          dev: 'dev yeah!',
          info,
        },
      }
    },
  },
  {
    url: '/api/getProduct',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          produt: 'product yeah!',
        },
      }
    },
  },
  {
    url: '/api/login',
    method: 'post',
    response: (temHeader: temHeader) => {
      const params = temHeader.body
      // console.log(params, 'params')
      if (params.password === '123456' && params.userName === 'admin') {
        return {
          code: 200,
          data: {
            token: '123456saffafds',
          },
        }
      }
      return {
        code: 202,
        data: {},
        errMsg: '用户名密码错误',
      }
    },
  },
] as MockMethod[]

/*
 * @Author: yhq
 * @Date: 2022-05-17 10:35:02
 * @LastEditTime: 2022-06-02 07:37:44
 * @LastEditors: vacrain
 * @Description:
 * @FilePath: /steppp-monorepo/app/quan/src/base/utils/request/index.ts
 *
 */
// 封装请求  最简单的，可以根据业务进行修改
import axios from 'axios'
import { download } from '../file'
// 请求
const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 6000, // 请求时间
})

// 请求拦截
http.interceptors.request.use(
  (config: any) => {
    // 设置请求头 token
    const token = localStorage.getItem('token') || ''
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = token
    return config
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: any) => {
    // console.log(err, 'err')
  }
)
// 响应拦截
http.interceptors.response.use(
  // eslint-disable-next-line consistent-return
  (res: any) => {
    const { config, data, status } = res
    // 如果接口请求成功返回 data 除去文件下载
    if (status === 200) {
      return data
    }
    if (config.responseType === 'blob') {
      download(res) // 文件下载
    } else {
      window.$message.error(data.errMsg)
    }
  },
  // eslint-disable-next-line consistent-return
  (error: any) => {
    window.$message.error('系统错误，请联系客服！')
    if (axios.isCancel(error)) {
      return Promise.reject(error)
    }
  }
)

// 封装请求参数
function request({ url = '', method = 'get', ...otherOptions }) {
  return http({
    method,
    url,
    ...otherOptions,
  })
}

export { request }

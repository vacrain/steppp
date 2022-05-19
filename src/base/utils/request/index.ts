// 封装请求  最简单的，可以根据业务进行修改
import axios from 'axios'
import { download } from '../file'
// 请求
const http = axios.create({
    baseURL: '/api/',
    timeout: 6000, //请求时间
})

// 请求拦截
http.interceptors.request.use(
    (config: any) => {
        // 设置请求头 token
        const token = localStorage.getItem('token') || ''
        config.headers.Authorization = token
        return config
    },
    err => {
        console.log(err)
    }
)
// 响应拦截
http.interceptors.response.use((res: any) => {
    const { config, data, status } = res
    // 如果接口请求成功返回 data 除去文件下载
    if (status == 200 && data.code == 200) {
        return data
    } else if (config.responseType == 'blob') {
        download(res) //文件下载
    } else {
        // 控制台报出错误信息
        return Promise.reject(data.errMsg || '请求失败')
    }
})

// 封装请求参数
function request({ url = '', method = 'get', ...otherOptions }) {
    return http({
        method,
        url,
        ...otherOptions,
    })
}

export { request }

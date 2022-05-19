import { request } from '@/base/utils'
export default {
    // 如果带参数就这么传
    getNameList(data = {}) {
        return request({ url: '/get', data })
    },
    getProduct() {
        return request({ url: '/getProduct', responseType: 'blob' })
    },
}

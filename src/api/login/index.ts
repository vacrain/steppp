/*
 * @Author: yhq
 * @Date: 2022-05-25 10:43:46
 * @LastEditTime: 2022-05-25 10:46:33
 * @LastEditors: yhq
 * @Description:
 * @FilePath: \naive-ui-steppp\src\api\login\index.ts
 *
 */
import { request } from '@/base/utils'
export default {
    login(data = {}) {
        return request({ url: '/login', method: 'post', data })
    },
}

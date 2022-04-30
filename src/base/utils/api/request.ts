/*
 * @Author: vacrain
 * @Date: 2022-04-30 07:58:35
 * @LastEditors: vacrain
 * @LastEditTime: 2022-04-30 15:56:47
 * @FilePath: /steppp/src/base/utils/api/request.ts
 * @Description:
 *
 */
import mockJson from './mock.json'

export const request = () => {
    return new Promise(resolve => {
        resolve(mockJson)
    })
}

export const getMockInfo = async () => {
    const result = (await request()) as { success: boolean; result: object }

    if (result.success) {
        window.$message.success('Successfully request')
    } else {
        window.$message.error('Failed request')
    }
}

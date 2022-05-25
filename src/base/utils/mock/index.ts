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

const mockRequest = () => {
    return new Promise(resolve => {
        resolve(mockJson)
    })
}

export const getMockInfo = async () => {
    const result = (await mockRequest()) as { success: boolean; result: object }
    console.log(result, 'result')
    if (result.success) {
        window.$message.success('Successfully request')
    } else {
        window.$message.error('Failed request')
    }
}
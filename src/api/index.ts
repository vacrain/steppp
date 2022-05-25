/*
 * @Author: yhq
 * @Date: 2022-05-17 16:15:58
 * @LastEditTime: 2022-05-25 10:44:12
 * @LastEditors: yhq
 * @Description:
 * @FilePath: \naive-ui-steppp\src\api\index.ts
 *
 */
//所有 api 入口文件
import HomeApi from './home'
import LoginApi from './login'

export default {
    ...HomeApi,
    ...LoginApi,
}

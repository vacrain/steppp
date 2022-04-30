/*
 * @Author: vacrain
 * @Date: 2022-04-30 07:58:35
 * @LastEditors: vacrain
 * @LastEditTime: 2022-04-30 15:45:19
 * @FilePath: /steppp/src/base/typings/router.d.ts
 * @Description:
 *
 */
import 'vue-router'

declare module 'vue-router' {
    // interface RouteMeta extends AuthRoute.RouteMeta {}

    interface _RouteRecordBase {
        hidden?: boolean | string | number
    }
}

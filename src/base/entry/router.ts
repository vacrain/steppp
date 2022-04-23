/*
 * @Author: vacrain
 * @Date: 2022-04-17 14:23:14
 * @LastEditors: vacrain
 * @LastEditTime: 2022-04-23 15:16:04
 * @FilePath: /naive-ui-steppp/src/base/entry/router.ts
 * @Description:
 *
 */
import { createRouter, createWebHistory } from "vue-router";
import { ROUTE_LIST } from "@/base/entry/appConst";

const routes: RouteRecordRaw = [];

for (let i = 0; i < ROUTE_LIST.length; i++) {
    let routeObj = ROUTE_LIST[i];
    routes.push({
        path: routeObj.path,
        component: routeObj.component,
    });
}

// ROUTE_LIST.forEach((val, idx, routeObj) => {
//     let path = !!routeObj.path ? routeObj.path : ;
//     if(!!routeObj.path)
//     routes.push({
//         path:
//     });
// });

// main

// component.__file: "/Library/code/projects/others_now/naive-ui-provider/src/container/home/Home.vue"
// str=str.split(',')[str.split(',').length - 1];
// ROUTE_LIST.forEach((val, idx, routeObj) => {
//     routes.push({
//         path: "/" + routeObj.fieldName,
//         component: COMPONENT_ITEMS[0],
//     });
// });

// 放数组里 引入之后 forEach
// const routes = [
//     {
//         path: "/",
//         component: Home,
//     },
//     {
//         path: "/field1",
//         component: Field1,
//     },
//     {
//         path: "/vue3",
//         component: Vue3,
//     },
// ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

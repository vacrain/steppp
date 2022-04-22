/*
 * @Author: vacrain
 * @Date: 2022-04-17 14:23:14
 * @LastEditors: vacrain
 * @LastEditTime: 2022-04-22 21:18:01
 * @FilePath: /naive-ui-steppp/src/base/config/router.ts
 * @Description:
 *
 */
import { createRouter, createWebHistory } from "vue-router";

// spec views
import Home from "@/spec/home/homeMain.vue";
import Field1 from "@/spec/field1/field1Main.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/field1",
            component: Field1,
        },
    ],
});

export default router;

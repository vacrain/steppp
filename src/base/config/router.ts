import { createRouter, createWebHistory } from "vue-router";

// spec views
import Home from "@/spec/stepHome/stepHomeMain.vue";
import Home2 from "@/spec/stepField1/stepField1Main.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/home2",
            component: Home2,
        },
    ],
});

export default router;

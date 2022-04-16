import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// import Home from '@/container/home/Home.vue'
// import Request from '@/container/request/Request.vue'
// import Message from '@/container/message/Message.vue'
// import Dialog from '@/container/dialog/Dialog.vue'
// import Notification from '@/container/notification/Notification.vue'
// import LoadingBar from '@/container/loadingBar/LoadingBar.vue'

import Home from "@/components/home.vue";
import Home2 from "@/components/home2.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/home2",
    component: Home2,
  },
  //   {
  //     path: "/request",
  //     component: Request,
  //   },
  //   {
  //     path: "/message",
  //     component: Message,
  //   },
  //   {
  //     path: "/dialog",
  //     component: Dialog,
  //   },
  //   {
  //     path: "/notification",
  //     component: Notification,
  //   },
  //   {
  //     path: "/loadingBar",
  //     component: LoadingBar,
  //   },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

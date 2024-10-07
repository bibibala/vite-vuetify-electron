import Home from "../pages/Home/index.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/Home",
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(), // 使用 Hash 模式
  routes,
});

export default router;

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from '@/pages/Home/index.vue'

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
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;

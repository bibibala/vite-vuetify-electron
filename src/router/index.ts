import Home from '@/pages/Home/index.vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Home',
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/RunC',
    name: 'RunC',
    component: () => import('@/pages/RunC/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// router.beforeEach((to,from,next)=>{
//
// })
export default router;

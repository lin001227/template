import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/login/login.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/layout/index.vue'),
  },
  // 其他路由...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

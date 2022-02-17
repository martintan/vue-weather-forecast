import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '../views/Login.vue';

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'landing',
  //   component: Landing,
  // },
  {
    path: '/login',
    name: 'landing',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

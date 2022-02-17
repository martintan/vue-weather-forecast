import { Auth0 } from '@/utils/auth';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import { authPlugin } from '@/utils/auth';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    // beforeEnter: Auth0.routeGuard,
    beforeEnter: (_, __, next) => {
      if (!authPlugin.isAuthenticated.value) {
        return next({ name: 'login', replace: true });
      }
      next();
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: (_, __, next) => {
      // If user is already logged in, just go straight to Home
      // (and don't let them navigate backwards).
      if (authPlugin.isAuthenticated.value) {
        return next({ name: 'home', replace: true });
      }
      next();
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

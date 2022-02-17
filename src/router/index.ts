import { Auth0 } from '@/utils/auth';
import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordRaw,
} from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Weather from '../views/Weather.vue';
import { authPlugin } from '@/utils/auth';

const requireAuth = (
  _: RouteLocationNormalized,
  __: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  if (!authPlugin.isAuthenticated.value) {
    return next({ name: 'login', replace: true });
  }
  next();
};

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    // beforeEnter: Auth0.routeGuard,
    beforeEnter: requireAuth,
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
  {
    path: '/weather',
    name: 'weather',
    component: Weather,
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

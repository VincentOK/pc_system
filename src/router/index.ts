import {App} from 'vue';
import { RouteRecordRaw, createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import routes from './asyncRouter';
import { LoginRoute } from './routes/index';
import { REDIRECT_NAME } from './constant';
console.log(routes);
const WHITE_NAME_LIST = [LoginRoute.name, REDIRECT_NAME];
const router = createRouter({
  // @ts-ignore
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return { ...savedPosition, behavior: 'smooth' };
    } else {
      return { x: 0, y: 0, behavior: 'smooth' };
    }
  },
  routes
});

// Reset router
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name && !WHITE_NAME_LIST.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}

export function setupRouter(app: App<Element>) {
  app.use(router);
}
export default router;

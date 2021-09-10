import {App} from 'vue';
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import routes from './asyncRouter';
const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return { ...savedPosition, behavior: 'smooth' };
    } else {
      return { x: 0, y: 0, behavior: 'smooth' };
    }
  },
  routes
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
export default router;

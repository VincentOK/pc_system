import type { Router } from 'vue-router';
import { toRaw } from 'vue';
import { resetRouter } from '/@/router/index';
import { useMenuStore } from '/@/store/modules/menuStore';
export function createPageGuard(router: Router) {
  const loadedPageMap = new Map<string, boolean>();
  router.beforeEach((to) => {
    to.meta.loaded = !!loadedPageMap.get(to.path);
    return true;
  });

  router.afterEach((to) => {
    loadedPageMap.set(to.path, true);
  });
}

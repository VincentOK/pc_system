import type { Router } from 'vue-router';

export function createPageGuard(router: Router) {
  const loadedPageMap = new Map<string, boolean>();

  router.beforeEach((to) => {
    to.meta.loaded = !!loadedPageMap.get(to.path);
    // Notify routing changes
    console.log('页面切换');
    return true;
  });

  router.afterEach((to) => {
    loadedPageMap.set(to.path, true);
  });
}

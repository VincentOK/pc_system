import { createApp } from 'vue';
import App from './App.vue';
import router, {setupRouter} from './router';
import { setupRouterGuard } from './router/guard';
import {setupStore} from './store';
import Antd from './plugins/components/antdv';
import './style/index.less';
import './style/main.less';
(async () => {
  const app = createApp(App);
  app.use(Antd);
  setupRouter(app);
  setupRouterGuard();
  setupStore(app);
  await router.isReady();
  app.mount('#app', true);
})();

import {App} from 'vue';
import { createStore } from 'vuex';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const modules = import.meta.globEager('./modules/*.ts');
const map:any = {};
Object.keys(modules).forEach(file => {
  const modulesName:string = file.replace('./modules/', '').replace('.ts', '');
  map[modulesName] = modules[file].default;
});
const store = createStore({
  modules: {
    ...map
  }
});
export function setupStore(app: App<Element>) {
  app.use(store);
}
export default store;

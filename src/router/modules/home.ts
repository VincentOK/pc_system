import { RouteRecordRaw } from 'vue-router';
const home: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    component: () => import('/@/views/dashboard/dashboard.vue')
  }
];
export default home;

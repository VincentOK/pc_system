import { RouteRecordRaw } from 'vue-router';
const home: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('/@/views/dashboard/dashboard.vue')
  }
];
export default home;

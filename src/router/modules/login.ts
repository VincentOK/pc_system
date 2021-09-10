import { RouteRecordRaw } from 'vue-router';
const login: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('/@/views/login/login.vue')
  }
];
export default login;

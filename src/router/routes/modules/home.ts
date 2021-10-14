import { RouteRecordRaw } from 'vue-router';
import { LAYOUT } from '/@/router/constant';
import {PageEnum} from '/@/enums/pageEnum';
const home: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    component: LAYOUT,
    redirect: PageEnum.BASE_HOME,
    meta: {
    },
    children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: () => import('/@/views/dashboard/dashboard.vue')
        },
    ]
  }
];
export default home;

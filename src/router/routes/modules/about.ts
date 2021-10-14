import { RouteRecordRaw } from 'vue-router';
import { LAYOUT } from '/@/router/constant';
import {PageEnum} from '/@/enums/pageEnum';
const home: RouteRecordRaw[] = [
    {
        path: '/about',
        name: 'About',
        component: LAYOUT,
        meta: {
        },
        children: [
            {
                path: '/aboutme',
                name: 'AboutMe',
                component: () => import('/@/views/dashboard/about.vue')
            }
        ]
    }
];
export default home;

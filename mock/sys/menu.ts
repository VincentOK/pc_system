import { resultSuccess } from '../_util';
import { MockMethod } from 'vite-plugin-mock';

const systemRoute = {
  path: '/system',
  name: 'System',
  component: 'LAYOUT',
  redirect: '/system/account',
  meta: {
    icon: 'carbon:user-role',
    title: 'routes.demo.system.moduleName',
  },
  children: [
    {
      path: 'account',
      name: 'Account',
      component: '/demo/system/account/index',
      meta: {
        title: 'routes.demo.system.account',
      },
    },
    {
      path: 'role',
      name: 'Role',
      component: '/demo/system/role/index',
      meta: {
        title: 'routes.demo.system.role',
      },
    },
    {
      path: 'menu',
      name: 'Menu',
      component: '/demo/system/menu/index',
      meta: {
        title: 'routes.demo.system.menu',
      },
    },
    {
      path: 'dept',
      name: 'Dept',
      component: '/demo/system/dept/index',
      meta: {
        title: 'routes.demo.system.dept',
      },
    },
    {
      path: 'changePassword',
      name: 'ChangePassword',
      component: '/demo/system/password/index',
      meta: {
        title: 'routes.demo.system.password',
      },
    },
  ],
};

const dashboardRoute = {
  path: '/dashboard',
  name: 'dashboard',
  component: 'LAYOUT',
  redirect: '/dashboard/analysis',
  meta: {
    title: 'routes.dashboard.dashboard',
    affix: true,
    icon: 'bx:bx-home',
  },
  children: [
    {
      path: 'analysis',
      name: 'analysis',
      component: '/dashboard/analysis/index',
      meta: {
        title: 'routes.dashboard.analysis',
      },
    },
    {
      path: 'workbench',
      name: 'workbench',
      component: '/dashboard/workbench/index',
      meta: {
        title: 'routes.dashboard.workbench',
      },
    },
  ],
};
export default [
  {
    url: '/basic-api/getMenuListById',
    timeout: 1000,
    method: 'get',
    response: ({ query }) => {
      const { id } = query;
      if (!id || id === '1') {
        return resultSuccess([dashboardRoute, systemRoute]);
      }
      if (id === '2') {
        return resultSuccess([dashboardRoute, systemRoute]);
      }
    },
  },
] as MockMethod[];

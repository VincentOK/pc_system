import type {AppRouteModule} from '/@/router/types';
import { router } from '/@/router/index';
import { defineStore } from 'pinia';
import { store } from '/@/store';
import { LAYOUT } from '/@/router/constant';
import { getRoutes } from '/@/api/routes';
import { Console } from 'console';
interface UserState {
    collapsed: boolean;
    breadCrumb: Array<string>;
    treeRouteList: AppRouteModule[];
    routerList: AppRouteModule[]
}

export const useMenuStore = defineStore({
    id: 'menuStore',
    state: (): UserState => ({
        collapsed: false,
        breadCrumb: ['题库管理', '试题库', '试题管理'],
        treeRouteList: [],
        routerList: []
    }),
    getters: {
        getCollapsed(): boolean {
            return this.collapsed;
        },
        getBreadCrumb(): Array<string> {
            return this.breadCrumb;
        },
        getMenuList(): AppRouteModule[] {
            return this.treeRouteList;
        },
        getRouteList(): AppRouteModule[] {
            return this.routerList;
        }
    },
    actions: {
        setCollapsed(data: boolean) {
            this.collapsed = data;
        },
        setBreadCrumb(data: Array<string>) {
            this.breadCrumb = data;
        },
        setMenuList(data?: AppRouteModule[]) {
            if (!data) {
                // const res = await getRoutes();
                const res_: AppRouteModule[] = [
                    {
                        path: '/',
                        name: 'Index',
                        component: 'LAYOUT',
                        redirect: '/dashboard',
                        meta: {
                            title: '首页'
                        },
                        children: [
                            {
                              path: '/dashboard',
                              name: 'Dashboard',
                              component: '/views/dashboard/dashboard',
                              meta: {
                                  title: '首页'
                              }
                            }
                        ]
                      },
                    {
                        path: '/about',
                        name: 'About',
                        component: 'LAYOUT',
                        meta: {
                            title: '关于'
                        },
                        children: [
                            {
                                path: '/aboutme',
                                name: 'AboutMe',
                                component: '/views/dashboard/about',
                                meta: {
                                    title: '关于'
                                }
                            }
                        ]
                    }
                ];
                console.log(res_);
                const routeArr: AppRouteModule[] = [];
                const fn = function (itemData: AppRouteModule[]):void {
                    if (itemData && itemData.length > 0) {
                        // eslint-disable-next-line array-callback-return
                        itemData.map((_item, _i) => {
                            if (_item.component && _item.component === 'LAYOUT') {
                                const layout = '/@/layouts/index.vue';
                                _item.component = () => import(layout);
                            } else {
                                const components = `/@${_item.component}.vue`;
                                _item.component = () => import(components);
                            }
                            if (_item.children && _item.children.length > 0) {
                                fn(_item.children);
                            }
                            _item.children && delete _item.children;
                            routeArr.push(_item);
                        });
                        console.log(itemData);
                    }
                };
                fn(res_);
                console.log(res_);
                this.routerList = routeArr;
                this.treeRouteList = res_;
            };
        }
    }
});
// Need to be used outside the setup
export function useMenuStoreWidthOut() {
    return useMenuStore(store);
}

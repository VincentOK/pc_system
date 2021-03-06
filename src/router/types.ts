import type { RouteRecordRaw } from 'vue-router';
import { RoleEnum } from '/@/enums/roleEnum';

import { defineComponent } from 'vue';

export type Component<T extends any = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>);

export interface RouteMeta {
  // Title
  title: string;
  //NoCache
  noCache?: boolean;
  // Whether to ignore permissions
  ignoreAuth?: boolean;
  // Role info
  roles?: RoleEnum[];
  // Whether not to cache
  ignoreKeepAlive?: boolean;
  // Is it fixed on tab
  affix?: boolean;
  // Icon on tab
  icon?: string;

  frameSrc?: string;

  // Current page transition
  transitionName?: string;

  // Whether the route has been dynamically added
  hideBreadcrumb?: boolean;

  // Hide submenu
  hideChildrenInMenu?: boolean;

  // Carrying parameters
  carryParam?: boolean;

  // Used internally to mark single-level menus
  single?: boolean;

  // Currently active menu
  currentActiveMenu?: string;

  // Never show in tab
  hideTab?: boolean;

  // Never show in menu
  hideMenu?: boolean;

  isLink?: boolean;
}
// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string;
  meta: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  // eslint-disable-next-line no-undef
  props?: Recordable;
  fullPath?: string;
  hidden?: boolean;
}
// Export type AppRouteModule = RouteModule | AppRouteRecordRaw;
export type AppRouteModule = AppRouteRecordRaw;

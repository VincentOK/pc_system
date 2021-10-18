import type { RouteRecordRaw } from 'vue-router';
import { defineComponent } from 'vue';
export type Component<T extends any = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>);
export interface UserInfo {
    id: number,
    userName: string,
    dept: string,
    deptName: string,
    token: string
}
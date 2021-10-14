import { defineStore } from 'pinia';
import { store } from '/@/store';


interface UserState {
    collapsed: boolean,
    breadCrumb: Array<string>
}

export const useMenuStore = defineStore({
    id: 'menuStore',
    state: (): UserState => ({
        collapsed: false,
        breadCrumb: ['题库管理', '试题库', '试题管理']
    }),
    getters: {
        getCollapsed(): boolean {
            return this.collapsed;
        },
        getBreadCrumb(): Array<string> {
            return this.breadCrumb;
        }
    },
    actions: {
        setCollapsed(data: boolean) {
            this.collapsed = data;
        },
        setBreadCrumb(data: Array<string>) {
            this.breadCrumb = data;
        }
    }
});
// Need to be used outside the setup
export function useMenuStoreWidthOut() {
    return useMenuStore(store);
}

import { defineStore } from 'pinia';
import type {UserInfo} from '/#/store';
import { store } from '/@/store';


interface UserState {
    // eslint-disable-next-line no-undef
    userInfo: Nullable<UserInfo>;
}

export const useUserStore = defineStore({
    id: 'userStore',
    state: (): UserState => ({
        userInfo: {
            id: 1,
            token: 'xxxxxxxxxxxxxxxxxxxxxx',
            userName: 'admin',
            dept: '110',
            deptName: '研发部'
        }
    }),
    getters: {
        getUserInfo(): UserInfo {
            return this.userInfo as UserInfo;
        }
    },
    actions: {
        setUserInfo(data: UserInfo) {
            this.userInfo = data;
        }
    }
});
// Need to be used outside the setup
export function useUserStoreWidthOut() {
    return useUserStore(store);
}

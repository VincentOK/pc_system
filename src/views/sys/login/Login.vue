<template>
  <div class="div_">
    <HelloWorld
      msg="typescript vite"
      :str="str"
    />
    <p>{{ userInfoData.token }}</p>
    <a-button
      type="primary"
      @click="requstFn"
    >
      {{ btnValue }}
    </a-button>
    <br>
    <br>
    <a-button
      type="primary"
      @click="btnFn"
    >
      更改store值
    </a-button>
    <br>
    <br>
    <a-button
      type="primary"
      @click="toIndex"
    >
      切换页面
    </a-button>
  </div>
</template>
<script lang="ts" setup>
import HelloWorld from '/@/components/HelloWorld.vue';
import {ref, computed, defineExpose} from 'vue';
import {postUserRecord} from '/@/api/home';
import router from '/@/router';
import { useUserStore } from '/@/store/modules/userStore';
import { useMenuStore } from '/@/store/modules/menuStore';
const useUser = useUserStore();
const useMenu = useMenuStore();
const userInfoData = useUser.getUserInfo;
console.log('userInfoData', userInfoData);
const token = computed(() => {
    return useUser.getUserInfo.token;
});
const border: Record<string, string> = {
    color: '1px solid red'
};
const str = ref<number>(111);
const btnValue = ref<string>('login');
const toIndex = (): void => {
  console.log('前往首页');
    router.push({
        path: '/dashboard'
    });
};
const requstFn = async (): Promise<void> => {
    console.log('====发起网络请求====');
    // const data_ = useMenu.setMenuList();
    // toIndex();
    const data = await postUserRecord();
    console.log(data[0].code);
};
const btnFn = (): void => {
  userInfoData.token = '这是新的token';
  useUser.setUserInfo(userInfoData);
};

</script>
<style scoped lang="less">
.div_ {
    border: v-bind('border.color');
}
</style>

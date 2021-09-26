<template>
  <div class="div_">
    <HelloWorld msg="typescript vite" :str="str"/>
    <p>{{value}}</p>
    <a-button type="primary" @click="requstFn">
      {{ btnValue }}
    </a-button>
    <br />
    <br />
    <a-button type="primary" @click="btnFn">
      更改store值
    </a-button>
    <br />
    <br />
    <a-button type="primary" @click="toIndex">
      切换页面
    </a-button>
  </div>
</template>
<script lang="ts" setup>
import HelloWorld from '/@/components/HelloWorld.vue';
import {ref, computed, defineExpose} from 'vue';
import { useStore } from 'vuex';
import { postUserRecord } from '/@/api/home';
import router from '/@/router';
const store = useStore();
const value = computed(() => {
  return store.state.special.title;
});
const border: Object = {
  color: '1px solid red'
};
const str = ref<number>(111);
const btnValue = ref<string>('login');
const requstFn = async (): Promise<void> => {
    console.log('====发起网络请求====');
    const data = await postUserRecord();
    console.log(data[0].code);
};
const btnFn = ():void => {
  //store.dispatch('special/actionSetTitle');
  store.commit('special/setTitle', '这也是新标题');
};
const toIndex = ():void => {
  router.push({
    name: 'Index'
  });
};
</script>
<style scoped lang="less">
    .div_ {
        border: v-bind('border.color');
    }
</style>

<template>
  <div class="dashboard">
    ssss
    {{ btnvalue }}
    <button @click="toLogin">
      login
    </button>
    <button @click="toAbout">
      about
    </button>
  </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue';
import router from '/@/router';
const btnvalue = ref<string>('dashboard');
const formvalue = 'aaa';
const fn = () => {
    console.log('aaa');
};
const toLogin = () => {
  router.push({
    path: '/login'
  });
};
const toAbout = () => {
  router.push({
    path: '/about'
  });
};
</script>
<style scoped lang="less">
.dashboard {
    border: 1px solid red;
}
</style>

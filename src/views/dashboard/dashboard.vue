<template>
  <div class="dashboard">
    {{ btnvalue }}
  </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue';
const btnvalue = ref<string>('dashboard');
const formvalue = 'aaa';
const fn = () => {
    console.log('aaa');
};
</script>
<style scoped lang="less">
  .dashboard{
    border: 1px solid red;
  }
</style>

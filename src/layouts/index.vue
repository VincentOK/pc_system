<template>
  <div>
    <div class="header_layout">
      <HeaderLayout />
    </div>
    <div class="menue_contains_layout">
      <div class="menue_layout">
        <MenueLayout />
      </div>
      <div class="content_layout">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {RouterView} from 'vue-router';
  import HeaderLayout from './header/index.vue';
  import MenueLayout from './menue/index.vue';
</script>

<style scoped lang="less">
  .header_vue{
    height: 100px;
    width: 100%;
    border: 1px solid red;
  }
  .menue_contains_layout{
    display: flex;
    .menue_layout{
      flex: 1;
      border: 1px solid #000000;
    }
    .content_layout{
      flex: 9;
      border: 1px solid green;
    }
  }
</style>

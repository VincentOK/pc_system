<template>
  <div class="contains_layout">
    <div class="menue_contains_layout">
      <div class="header_layout">
        <HeaderLayout />
      </div>
      <div class="menue_layout">
        <MenueLayout />
      </div>
      <div class="content_layout">
        <Breadcrumb />
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import {RouterView} from 'vue-router';
  import HeaderLayout from './header/index.vue';
  import MenueLayout from './menue/index.vue';
  import Breadcrumb from './breadCrumb/index.vue';
  import {LayoutEnum} from '/@/enums/layoutEnum';
</script>

<style scoped lang="less">
  .contains_layout{
    height: 100%;
    width: 100%;
  }
  .menue_contains_layout{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    position: relative;
    .header_layout{
      height: v-bind('LayoutEnum.HEADER_HEIGHT');
      line-height: v-bind('LayoutEnum.HEADER_HEIGHT');
      width: 100%;
      position: fixed;
      top: 0;
      color: #fff;
      z-index: 1;
    }
    .menue_layout{
      position: relative;
      height: 100%;
      padding-top: v-bind('LayoutEnum.HEADER_HEIGHT');
    }
    .content_layout{
      width: 100%;
      padding-top: v-bind('LayoutEnum.HEADER_HEIGHT');
    }
  }
</style>

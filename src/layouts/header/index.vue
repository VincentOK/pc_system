<template>
  <div class="header_layout">
    <LogoName />
    <div>
      <UserCenterDrop />
    </div>
  </div>
</template>

<script lang="ts" setup>
    import LogoName from './components/logoName.vue';
    import UserCenterDrop from './components/userCenterDrop.vue';
    import {LayoutEnum} from '/@/enums/layoutEnum';
</script>

<style scoped lang="less">
    .header_layout{
        height: 50px;
        line-height: 50px;
        background-color: v-bind('LayoutEnum.HEADER_BG');
        width: 100%;
    }
</style>

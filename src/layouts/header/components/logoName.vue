<template>
  <div class="logo_application">
    <img src="../../../assets/images/logoSrc.png">
    <span>{{ LayoutEnum.HEADER_NAME }}</span>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { LayoutEnum } from '/@/enums/layoutEnum';
const HEADER_HEIGHT: string = `${Number(LayoutEnum.HEADER_HEIGHT.replace('px', '')) - 25}px`;
</script>

<style scoped lang="less">
.logo_application {
  float: left;
  padding-left: 20px;
  font-size: 18px;
  > img {
    height: v-bind("HEADER_HEIGHT");
    margin-right: 20px;
  }
}
</style>

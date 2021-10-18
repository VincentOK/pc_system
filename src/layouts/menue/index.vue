<template>
  <div class="menue_layout_in">
    <div class="menue_left">
      <Menue />
    </div>
    <div
      v-if="useMenu.collapsed"
      class="menue_right"
    >
      <MenueItem />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Menue from './components/menue.vue';
import MenueItem from './components/menueItem.vue';
import {LayoutEnum} from '/@/enums/layoutEnum';
import {useMenuStore} from '/@/store/modules/menuStore';
import {computed} from 'vue';
const useMenu = useMenuStore();
const testGit:string = 'sssss';
</script>

<style scoped lang="less">
.menue_layout_in {
  display: flex;
  flex-direction: row;
  height: 100%;
  .menue_left {
    min-width: 80px;
    height: 100%;
    position: relative;
    background-color: v-bind('LayoutEnum.HEADER_BG');
    .a_menu {
      .ant-menu {
        background: v-bind('LayoutEnum.HEADER_BG');
      }
    }
  }
  .menue_right {
    width: 160px;
    height: 100%;
    position: relative;
  }
}
</style>

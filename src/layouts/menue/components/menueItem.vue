<template>
  <div class="a_sub_menu">
    <div class="sub_m_title">
      考务管理
    </div>
    <AMenu
      mode="inline"
      theme="light"
      :inline-collapsed="state.collapsed"
      :open-keys="state.openKeys"
      :selected-keys="state.selectedKeys"
    >
      <subMenu key="1">
        <template #icon>
          <PieChartOutlined />
        </template>
        <span>Option 1</span>
      </subMenu>
      <subMenu key="2">
        <template #icon>
          <DesktopOutlined />
        </template>
        <span>Option 2</span>
      </subMenu>
      <subMenu key="3">
        <template #icon>
          <InboxOutlined />
        </template>
        <span>Option 3</span>
      </subMenu>
    </AMenu>
  </div>
</template>

<script lang="ts" setup>
import {Menu} from 'ant-design-vue';
import {defineComponent, reactive, toRefs, watch, createCommentVNode} from 'vue';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined
} from '@ant-design/icons-vue';
const AMenu = Menu;
const subMenu = Menu.Item;
const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1']
});

watch(
  () => state.openKeys,
  (_val, oldVal) => {
    state.preOpenKeys = oldVal;
  }
);
const toggleCollapsed = () => {
  state.collapsed = !state.collapsed;
  state.openKeys = state.collapsed ? [] : state.preOpenKeys;
};
</script>

<style scoped lang="less">
.a_sub_menu {
  width: 100%;
  height: 100%;
  border-right: 1px solid #ccc;
  .sub_m_title {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #000;
  }
}
</style>

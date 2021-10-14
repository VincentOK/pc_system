<template>
  <div class="a_menu">
    <AMenu
      mode="inline"
      theme="dark"
      :inline-collapsed="useMenu.collapsed"
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
    <div
      class="toggle_collapsed"
      @click="toggleCollapsed"
    >
      <MenuUnfoldOutlined
        v-if="collapsed"
        class="svg_collapsed"
      />
      <MenuFoldOutlined
        v-else
        class="svg_collapsed"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Menu} from 'ant-design-vue';
import {defineComponent, reactive, toRefs, watch, createCommentVNode, computed} from 'vue';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined
} from '@ant-design/icons-vue';
import {useMenuStore} from '/@/store/modules/menuStore';
const useMenu = useMenuStore();
const collapsed = useMenu.getCollapsed;
const AMenu = Menu;
const subMenu = Menu.Item;
const state = reactive({
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
  const status: boolean = useMenu.getCollapsed ? false : true;
  useMenu.setCollapsed(status);
};
</script>

<style scoped lang="less">
.a_menu {
  width: 100%;
  height: 100%;
  .toggle_collapsed {
    width: 100%;
    position: absolute;
    bottom: 0;
    text-align: center;
    margin: auto;
    border-top: 1px solid #ffffff;
    padding: 10px 0;
    .svg_collapsed {
      font-size: 20px;
      color: #ffffff;
    }
  }
}
</style>

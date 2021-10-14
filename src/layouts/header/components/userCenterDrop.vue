<template>
  <div class="usercenter_drop">
    <Dropdown>
      <a
        class="ant-dropdown-link"
        @click.prevent
      >
        <UserOutlined style="color: #ffffff" />
        <span style="color: #ffffff">&nbsp;&nbsp;总部老师1(中央广播电视大学)&nbsp;&nbsp;</span>
        <DownOutlined style="color: #ffffff" />
      </a>
      <template #overlay>
        <Menu @click="onClick">
          <subMenu key="1">
            退出登录
          </subMenu>
        </Menu>
      </template>
    </Dropdown>
  </div>
</template>

<script lang="ts" setup>
import {VNodeChild} from 'vue';
interface MenuInfo {
  key: string;
  keyPath: string[];
  item: VNodeChild;
  domEvent: MouseEvent;
}
import {Dropdown, Menu} from 'ant-design-vue';
import {DownOutlined, UserOutlined} from '@ant-design/icons-vue';
const subMenu = Menu.Item;
const onClick = (key: MenuInfo) => {
  console.log(`Click on item ${key}`, key);
};
</script>

<style scoped lang="less">
.usercenter_drop {
  /*width: 200px;*/
  float: right;
  margin-right: 20px;
  color: #ffffff;
}
</style>

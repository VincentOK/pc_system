<template>
  <div
    v-if="breadcrumbs.length > 0"
    class="bread_crumb"
  >
    <Breadcrumb>
      <BreadcrumbItem
        v-for="(item, index) in breadcrumbs"
        :key="index"
      >
        {{ item }}
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<script lang="ts" setup>
    import { Breadcrumb } from 'ant-design-vue';
    const BreadcrumbItem = Breadcrumb.Item;
    import { useMenuStore } from '/@/store/modules/menuStore';
    const menuStore = useMenuStore();
    const breadcrumbs = menuStore.getBreadCrumb;
</script>

<style scoped lang="less">
  .bread_crumb{
    text-align: left;
    padding: 15px 0px 15px 15px;
  }
</style>

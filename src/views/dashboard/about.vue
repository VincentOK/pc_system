<template>
  <div class="dashboard">
    {{ btnvalue }}
  </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue';
import router from '/@/router';
const btnvalue = ref<string>('about');
</script>
<style scoped lang="less">
.dashboard {
  border: 1px solid red;
}
</style>

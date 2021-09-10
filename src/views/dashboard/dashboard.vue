<script lang="ts" setup>
import {ref} from 'vue';
const btnvalue = ref<string>('dashboard');
const formvalue = 'aaa';
const fn = () => {
    console.log('aaa');
};
</script>
<template>
  <div>
    {{ btnValue }}
  </div>
</template>

<style scoped></style>

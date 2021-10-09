<template>
  <div>
    <h1>{{ msg }}---{{ str }}</h1>
    <p>
      Recommended IDE setup:
      <a
        href="https://code.visualstudio.com/"
        target="_blank"
      >VSCode</a>
      +
      <a
        href="https://github.com/johnsoncodehk/volar"
        target="_blank"
      >Volar</a>
    </p>

    <p>See <code>README.md</code> for more information.</p>

    <p>
      <a
        href="https://vitejs.dev/guide/features.html"
        target="_blank"
      > Vite Docs </a>
      |
      <a
        href="https://v3.vuejs.org/"
        target="_blank"
      >Vue 3 Docs</a>
    </p>

    <button
      type="button"
      @click="countStr++"
    >
      count is: {{ countStr }}
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </div>
</template>
<script lang="ts" setup>
import {ref, defineProps, defineEmits} from 'vue';
const props = defineProps<{
    msg: string;
    str: number;
}>();
const emits =
    defineEmits<{(e: 'parentsFn', id: number): void; (e: 'childrenFn', id: number): void}>();
const countStr = ref<number>(0);
const strArr = ref<Array<string>>(['a', 'b', 'c', 'd']);
emits('parentsFn', 111);
for (let i = 0; i < strArr.value.length; i++) {
    console.log(i);
}
</script>
<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>

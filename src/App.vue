<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
import index from './page/index/index.vue';

import { useTitle } from '@vueuse/core'

const title = useTitle('Hello')



</script>

<template>
  <index></index>
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

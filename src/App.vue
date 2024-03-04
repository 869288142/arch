<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
import index from './page/index/index.vue';
import { useSharedMouse } from './hooks';

const { x, y } = useSharedMouse()




</script>

<template>
  <index ></index>
  <div> {{ x }}  {{y}}</div>
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
</template>

<style>
</style>

<script setup lang="ts">
import index from './page/index/index.vue';
import { useSharedMouse } from './hooks';

const { x, y } = useSharedMouse()
defineOptions({
  name: 'APP'
}) 



</script>

<template>
  <index ></index>
  <div> {{ x }}  {{y}}</div>
</template>

<style>
 @reference "tailwindcss/theme";
.select2-dropdown {
  @apply rounded-b-lg shadow-md;
}

</style>

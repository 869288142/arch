<template>
    <div>
        <suspense>
            <template #default>
                <Nav />
            </template>
            <template #fallback>
                <div>Loading...</div>
            </template>
        </suspense>
        <suspense>
            <template #default>
                <GoodsList />
            </template>
            <template #fallback>
                <div>Loading...</div>
            </template>
        </suspense>
    </div>
</template>
<script lang="tsx" setup>
import Nav from './components/Nav.vue';
import GoodsList from './components/GoodsList.vue';
</script>
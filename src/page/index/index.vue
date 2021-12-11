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
<script lang="tsx">
import Nav from './components/Nav.vue';
import GoodsList from './components/GoodsList.vue';
import { defineComponent } from 'vue'
export default defineComponent({
    setup() {
    },
    components: {
        Nav,
        GoodsList
    },
})
</script>
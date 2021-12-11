<template>
    <h3>商品列表</h3>
    <div class="goods-list">
        <GoodsItem v-for="goods in goodsList" :goods="goods" />
    </div>
</template>
<script lang="ts" setup>
import GoodsItem from './GoodsItem';
import { GoodsService } from '../services';
import { ref } from 'vue'
import Goods from '@/domain/good/entity/goods';

let goodsList = ref<Goods[] | null>(null)

goodsList.value = await GoodsService.getGoodsList()

</script>
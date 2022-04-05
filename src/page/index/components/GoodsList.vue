<template>
  <h3>商品列表</h3>
  <h3>{{x}}{{y}}</h3>
  <div class="goods-list">
    <GoodsItem v-for="goods in goodsList" :goods="goods" />
  </div>
</template>
<script lang="ts" setup>
import GoodsItem from "./GoodsItem";
import { GoodsService } from "../services";
import { computed, reactive, ref } from "vue";
import Goods from "@/domain/good/entity/goods.entity";
import { useSharedMouse } from "@/hooks";

let goodsList = ref<Goods[] | null>(null);

goodsList.value = await GoodsService.getGoodsList();

const { x, y } = useSharedMouse()
</script>
<template>
  <h3>商品列表</h3>
  <h3>{{x}}{{y}}</h3>
  <div class="goods-list">
    <GoodsItem v-for="goods in goodsList" :goods="goods" />
  </div>
</template>
<script lang="ts" setup>

import GoodsItem from "./GoodsItem";
import Goods from "@/domain/good/entity/goods.entity";
import { useSharedMouse } from "@/hooks";
import { inject } from 'vue'
import { goodsServiceToken } from "@/shared/contants/token";
import  { GoodsService as  GoodsServiceImp} from "../services";

const GoodsService = inject<typeof GoodsServiceImp>(goodsServiceToken)

let goodsList = $ref<Goods[] | null>(null);

goodsList = await GoodsService!.getGoodsList();

const { x, y } = useSharedMouse()
</script>
import type { InjectionKey } from 'vue'
import { GoodsService } from "../../page/index/services";
export const goodsServiceToken = Symbol('goodsServiceToken') as InjectionKey<typeof GoodsService>
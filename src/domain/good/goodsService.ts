import { getGoodsList } from '@/api/goods/requestApis';
import Goods from './entity/goods';

class GoodsService {

    /**
     * 获取商品列表
     */
    static getGoodsList() {
        return getGoodsList().then(list => {
            return list.map(item => new Goods(item))
        })
    }
}

export default GoodsService;
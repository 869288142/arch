import { getGoodsList } from '@/domain/good/repository/goods.repository';
import Goods from '../entity/goods.entity';

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
import axios from '../../request/'
import { GoodDTO, goodsTranslator } from './translators';

export function getGoodsList() {
    return axios.get<{ goods: GoodDTO [] }>('/goods/list').then(v=>{
        return v.data.goods.map(item => goodsTranslator(item))
    });
}
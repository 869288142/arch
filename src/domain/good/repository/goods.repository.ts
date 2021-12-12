import axios from '../../../request'
import { goodsTranslator } from './translators';
import { GoodDTO } from "./model/Good.model";

export function getGoodsList() {
    return axios.get<{ goods: GoodDTO [] }>('/goods/list').then(v=>{
        return v.data.goods.map(item => goodsTranslator(item))
    });
}
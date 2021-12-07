import axios from '../../request/'
import { goodsTranslator } from './translators';

export function getGoodsList() {
    return axios('/goods/list').then(v=>{
        return v.map(item => goodsTranslator(item))
    });
}
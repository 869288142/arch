import axios from '../../request/'

import { userTranslator } from './translators'

export function getUserDetail() {
    return axios('/user/detail').then(data => userTranslator(data));
}
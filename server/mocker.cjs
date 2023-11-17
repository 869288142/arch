const { goodsListData } = require('./data/goods.cjs');
const { userInfo } = require('./data/user.cjs');

module.exports = {
    // goods API
    // 获取商品列表
    'GET /goods/list'(req, res) { return res.json(goodsListData) },

    // user API
    // 获取用户信息详情
    'GET /user/detail'(req, res) { return res.json( userInfo ) },

    // ponit API

};
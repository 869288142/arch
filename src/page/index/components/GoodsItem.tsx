    export  default  ({goods}) =>   {
        console.log(goods);
        return (
            <div class="goods-item">
                <div class="main-info">
                    <img class="goods-img" src={goods.mainPicUrl} alt="" />
                    <div class="goods-name">{goods.name}</div>
                    {goods.isOutStock() && <span class="out-stock">已无货</span>}
                </div>
                <div class="detail-info">
                    {goods.isDiscountGoods()
                        ? <span class="price discount">特价：{goods.price} 元</span>
                        : <span class="price">价格：{goods.price} 元</span>}
                    <div class="tag-wrap">
                        {goods.getShowInListTags().map(v => {
                            return (
                                <span class="tag">{v.title}</span>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
                    }
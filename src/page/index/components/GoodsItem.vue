<script lang="tsx">
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        goods: {
            type: Object,
            default: () => ({})
        }
    },
    render() {
        return (
            <div class="goods-item">
                <div class="main-info">
                    <img class="goods-img" src={this.goods.mainPicUrl} alt="" />
                    <div class="goods-name">{this.goods.name}</div>
                    {this.goods.isOutStock() && <span class="out-stock">已无货</span>}
                </div>
                <div class="detail-info">
                    {this.goods.isDiscountGoods()
                        ? <span class="price discount">特价：{this.goods.price} 元</span>
                        : <span class="price">价格：{this.goods.price} 元</span>}
                    <div class="tag-wrap">
                        {this.goods.getShowInListTags().map(v => {
                            return (
                                <span class="tag">{v.title}</span>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    },
})
</script>
<style lang="scss">
.goods-item {
    border-bottom: 1px solid gray;
    margin-top: 10px;
    .main-info {
        display: flex;
        align-items: center;

        .goods-img {
            width: 50px;
            height: 50px;
        }

        .out-stock {
            font-size: 12px;
            background: pink;
            color: white;
            margin-left: 20px;
        }
    }
    .detail-info {
        display: flex;
        justify-content: space-between;
        .discount {
            color: red;
        }
        .tag-wrap {
            .tag {
                margin-left: 5px;
                font-size: 13px;
                background: gray;
                color: white;
            }
        }
    }
}
</style>
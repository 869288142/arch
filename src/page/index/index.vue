<script lang="tsx">
import Nav from './components/Nav.vue';
import GoodsItem from './components/GoodsItem';
import { GoodsService } from './services';
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
            msg: 'Hello world!',
            goodsList: null
        }
    },
    components: {
        Nav,
        GoodsItem
    },
    mounted() {
        GoodsService.getGoodsList().then(list => {
            this.goodsList = list
        })
    },
    render() {
        return (
            <div>
                <Nav />
                <h3 > 商品列表 </h3>
                <div class="goods-list" >
                    {this?.goodsList?.map(data => {
                        return (
                            <GoodsItem goods={data} />
                        )
                    })}
                </div>
            </div>)
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
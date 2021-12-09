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
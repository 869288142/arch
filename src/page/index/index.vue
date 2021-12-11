<script lang="tsx">
import Nav from './components/Nav.vue';
import GoodsItem from './components/GoodsItem';
import { GoodsService } from './services';
import { defineComponent, onMounted, ref } from 'vue'
import Goods from '@/domain/good/entity/goods';
export default defineComponent({
    setup() {
        let goodsList  = ref<Goods[] | null>(null)
        onMounted(async () => {
            goodsList.value = await GoodsService.getGoodsList()
        })

        return () => (
            <div >
                <Nav />
                <h3 > 商品列表 </h3>
                <div class="goods-list" >
                    {goodsList.value?.map(data => {
                        return (
                            <GoodsItem goods={data} />
                        )
                    })}
                </div>
            </div>)
    },
    components: {
        Nav,
        GoodsItem
    },
})
</script>
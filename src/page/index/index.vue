<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
            msg: 'Hello world!'
        }
    },
    render() {
        return (
            <div>
            <Nav />
            < h3 > 商品列表 < /h3>
            < div className = "goods-list" >
            {
                goodsList.map(data => {
                    return (
                        <GoodsItem goods= { data } />
            )
            })}
</>
    < /div>
  }
})
</script>
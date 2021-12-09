<script lang="tsx">
import { defineComponent, onMounted, ref } from 'vue';
import { SIGN_USER_TYPE } from '@/shared/contants/user';
import User from '@/domain/user/entity/user';
import { UserService } from '../services';
export default defineComponent({
    setup() {
        let user: null | User = null
        const count = ref(1)

        onMounted(async () => {
            user = await UserService.getUserDetail()
            count.value++
        })

        return () => (
            <div class="flex justify-between items-center">
                <div data-c={`${count.value}`}>DDD 商城</div>
                <div class="flex items-center">
                    <img class={`${user?.isVip ? ' border-[5px] border-solid border-[red]' : ''} w-[30px] h-[30px] mr-[10px] border-[20px]`} src={user?.avatarUrl} alt="" />
                    <span>{user?.type === SIGN_USER_TYPE ? `尊敬的${user?.getUserTypeTitle()}：` : null}{user?.name}</span>
                </div>
            </div>
        )
    },
})
</script>
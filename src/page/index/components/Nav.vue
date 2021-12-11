<script lang="tsx">
import { defineComponent, onMounted, ref } from 'vue';
import { SIGN_USER_TYPE } from '@/shared/contants/user';
import User from '@/domain/user/entity/user';
import { UserService } from '../services';

export default defineComponent({
    setup() {
        let user = ref<null | User>(null)

        onMounted(async () => {
            user.value = await UserService.getUserDetail()
        })
        return () => (<div class="flex justify-between items-center">
            <div>DDD 商城</div>
            <div class="flex items-center">
                <img class={(user.value?.isVip ? ' border-[5px] border-solid border-[red]' : '' )+ ' w-[30px] h-[30px] mr-[10px]'} src= {user.value?.avatarUrl}/>
                <span>{ user.value?.type === SIGN_USER_TYPE ? `尊敬的${user.value?.getUserTypeTitle()}：` : null + user.value?.name}</span>
            </div>)
        </div>)
    },
})
</script>
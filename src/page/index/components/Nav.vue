<template>
    <div class="flex justify-between items-center">
        <div>DDD 商城</div>
        <div class="flex items-center">
            <img
                :class="(user?.isVip ? ' border-[5px] border-solid border-[red]' : '') + ' w-[30px] h-[30px] mr-[10px]'"
                :src="user?.avatarUrl"
            />
            <span>{{ getUserTip(user) }}</span>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { SIGN_USER_TYPE } from '@/shared/contants/user';
import User from '@/domain/user/entity/user.entity';
import { UserService } from '../services';
import { ref } from 'vue';
let user = ref<null | User>(null)

user.value = await UserService.getUserDetail()


function getUserTip(user: User | null) {

    if (!user) {
        return ''
    }

    return (user?.type === SIGN_USER_TYPE ? `尊敬的${user?.getUserTypeTitle()}：` : null) + user?.name
}

</script>
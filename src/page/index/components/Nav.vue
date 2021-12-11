<template>
    <div class="flex justify-between items-center">
        <div>DDD 商城</div>
        <div class="flex items-center">
            <img
                :class="(user?.isVip ? ' border-[5px] border-solid border-[red]' : '') + ' w-[30px] h-[30px] mr-[10px]'"
                :src="user?.avatarUrl"
            />
            <span>{{ (user?.type === SIGN_USER_TYPE ? `尊敬的${user?.getUserTypeTitle()}：` : null )+ user?.name }}</span>
        </div>)
    </div>
</template>
<script lang="tsx" setup>
import { ref } from 'vue';
import { SIGN_USER_TYPE } from '@/shared/contants/user';
import User from '@/domain/user/entity/user';
import { UserService } from '../services';

let user = ref<null | User>(null)

user.value = await UserService.getUserDetail()
</script>
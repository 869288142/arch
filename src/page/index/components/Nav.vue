<template>
  <div class="flex justify-between items-center">
    <div>DDD 商城</div>
    <div class="flex items-center">
      <img
        :class="
          (user?.isVip ? ' border-[5px] border-solid border-[red]' : '') +
          ' w-[30px] h-[30px] mr-[10px]'
        "
        :src="user?.avatarUrl"
      />
      <span>{{ getUserTip(user) }}</span>
    </div>
  </div>
  <Search search-title="dsds" v-model="searchText" :ref="searchRefKey"></Search>
  <div>{{ searchText }}</div>
</template>
<script lang="ts" setup>
defineOptions({
  name: "Nav",
});
import Search from "./search.setup.tsx";
import { SIGN_USER_TYPE } from "@/shared/contants/user";
import User from "@/domain/user/entity/user.entity";
import { UserService } from "../services";
import { ref } from "vue";
import { useTemplateRef } from "vue";
let user = ref<null | User>(null);
const searchText = ref("");
user.value = await UserService.getUserDetail();
const searchRefKey = 'search'
const searchRef = useTemplateRef<InstanceType<typeof Search>>(searchRefKey);

function getUserTip(user: User | null) {
  if (!user) {
    return "";
  }

  return (
    (user?.type === SIGN_USER_TYPE
      ? `尊敬的${user?.getUserTypeTitle()}：`
      : null) + user?.name
  );
}
</script>

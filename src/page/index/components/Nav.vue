<script lang="tsx">
import { defineComponent } from 'vue';
import { SIGN_USER_TYPE } from '@/shared/contants/user';
import User from '@/domain/user/entity/user';
import { UserService } from '../services';
export default defineComponent({
    data() {
        return {
            user: new User()
        }
    },
    render() {
        const { user } = this;
        return (
            <div class="nav">
                <div>DDD 商城</div>
                <div class="user">
                    <img class={`${user.isVip ? 'vip' : ''}`} src={user.avatarUrl} alt="" />
                    <span>{user.type === SIGN_USER_TYPE ? `尊敬的${user.getUserTypeTitle()}：` : null}{user.name}</span>
                </div>
            </div>
        )
    },
    mounted() {
        UserService.getUserDetail().then(user => {
            // this.setState({
                user
            })
        // });
    }
})
</script>
<style lang="scss">
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .user {
        display: flex;
        align-items: center;
        img {
            width: 30px;
            height: 30px;
            margin-right: 10px;
            border-radius: 20px;
        }
        .vip {
            border: 5px solid red;
        }
    }
}
</style>
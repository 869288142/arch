import { getUserDetail } from '@/domain/user/repository/requestApis';
import User from '../entity/user';

class UserService {
    /**
     * 获取用户信息详情
     */
    static getUserDetail() {
        return getUserDetail().then(user => {
            return new User(user);
        })
    }
}

export default UserService;
import { getUserDetail } from '@/domain/user/repository/user.repository';
import User from '../entity/user.entity';

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
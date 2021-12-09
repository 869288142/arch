export interface UserDTO {
    userId: string;
    email: string;
    userName: string;
    tel: string;
    userType: number;
    vip: boolean;
    vipValidityDate: number;
    avatar: string;
}

export interface UserImp {
    id: string;
    email: string;
    name: string;
    phoneNumber: string;
    type: number;
    isVip: boolean;
    vipValidityDate: number;
    avatarUrl: string;
}

export function userTranslator({
  userId,
  email,
  userName,
  tel,
  userType,
  vip,
  vipValidityDate,
  avatar,
}: UserDTO): UserImp {
  return {
    id: userId,
    email,
    name: userName,
    phoneNumber: tel,
    type: userType,
    isVip: vip,
    vipValidityDate: vipValidityDate,
    avatarUrl: avatar,
  };
}

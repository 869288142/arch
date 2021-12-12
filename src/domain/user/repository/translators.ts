import { UserDTO } from "./model/User.model";

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

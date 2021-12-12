import axios from "../../../request";

import { userTranslator } from "./translators";
import { UserDTO } from "./model/User.model";

export function getUserDetail() {
  return axios.get<UserDTO>("/user/detail").then((data) => {
    return userTranslator(data.data);
  });
}

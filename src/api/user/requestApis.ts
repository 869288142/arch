import axios from "../../request/";

import { UserDTO, userTranslator } from "./translators";

export function getUserDetail() {
  return axios.get<UserDTO>("/user/detail").then((data) => {
    return userTranslator(data.data)
  }  );
}

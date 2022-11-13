import { request } from "../config/request";
import { User } from "../types";

export const getCurrentUser = () => {
  return request.get("/v1/user/me");
};

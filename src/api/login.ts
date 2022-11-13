import { request } from "../config/request";

export const loginUser = (data) => {
  return request.post("/v1/auth/login", data);
};

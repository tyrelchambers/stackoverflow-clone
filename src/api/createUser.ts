import { request } from "../config/request";

export const createUser = (data) => {
  return request.post("/v1/auth/register", data);
};

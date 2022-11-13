import { request } from "../config/request";

export const saveOnboarding = (data) => {
  return request.post("/v1/user/onboarding", data);
};

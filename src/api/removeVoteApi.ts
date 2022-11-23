import { request } from "../config/request";

export const removeVoteApi = (data) => {
  return request.post("/v1/question/vote/remove", data);
};

import { request } from "../config/request";

export const voteApi = (data) => {
  return request.post("/v1/question/vote", data);
};

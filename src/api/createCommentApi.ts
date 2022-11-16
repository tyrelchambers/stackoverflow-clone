import { request } from "../config/request";

export const createCommentApi = (data) => {
  return request.post("/v1/comment/create", data);
};

import { request } from "../config/request";

export const replyToComment = (data) => {
  return request.post("/v1/comment/reply", data);
};

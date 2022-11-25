import { request } from "../config/request";

export const deleteCommentApi = ({ commentId }) => {
  return request.delete(`/v1/comment/${commentId}/delete`);
};

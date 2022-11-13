import { request } from "../config/request";

export const createQuestionApi = (data) => {
  return request.post("/v1/question/create", data);
};

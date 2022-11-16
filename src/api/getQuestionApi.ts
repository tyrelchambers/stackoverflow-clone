import { request } from "../config/request";

export const getQuestionApi = (questionId: string) => {
  return request.get(`/v1/question/${questionId}`);
};

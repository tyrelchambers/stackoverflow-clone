import { request } from "../config/request";

export const getQuestionApi = (questionId: string | null) => {
  return request.get(`/v1/question/${questionId}`);
};

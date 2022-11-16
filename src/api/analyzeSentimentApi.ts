import { request } from "../config/request";

export const analyzeSentimentApi = (data) => {
  return request.post("/v1/sentiment/analyze", {
    commentBody: data,
  });
};

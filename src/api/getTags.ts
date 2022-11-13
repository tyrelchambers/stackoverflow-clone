import { request } from "../config/request";

export const getTags = () => {
  return request.get("/v1/tags");
};

import { useMutation } from "react-query";
import { analyzeSentimentApi } from "../api/analyzeSentimentApi";

export const useSentiment = () => {
  const mutation = useMutation((data) => analyzeSentimentApi(data));
  return { analyze: mutation };
};

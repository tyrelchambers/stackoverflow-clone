import { useMutation } from "react-query";
import { createQuestionApi } from "../api/createQuestionApi";

export const useQuestion = () => {
  const createQuestion = useMutation((data) => createQuestionApi(data));

  return {
    createQuestion,
  };
};

import { useMutation, useQuery } from "react-query";
import { createQuestionApi } from "../api/createQuestionApi";
import { getQuestionApi } from "../api/getQuestionApi";

export const useQuestion = (questionId?: string) => {
  const createQuestion = useMutation((data) => createQuestionApi(data));

  const question = useQuery("question", () => getQuestionApi(questionId), {
    enabled: !!questionId,
  });

  return {
    createQuestion,
    question: question.data,
  };
};

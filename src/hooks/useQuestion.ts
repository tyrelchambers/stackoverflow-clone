import { useMutation, useQuery } from "react-query";
import { createQuestionApi } from "../api/createQuestionApi";
import { getQuestionApi } from "../api/getQuestionApi";

interface Params {
  questionId: string;
}

export const useQuestion = ({ questionId }: Params) => {
  const createQuestion = useMutation((data) => createQuestionApi(data));
  const question = useQuery("question", () => getQuestionApi(questionId), {
    enabled: !!questionId,
  });

  return {
    createQuestion,
    question: question.data,
  };
};

import { useMutation, useQueryClient } from "react-query";
import { createCommentApi } from "../api/createCommentApi";

export const useComment = () => {
  const queryClient = useQueryClient();

  const createComment = useMutation((data) => createCommentApi(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("question");
    },
  });

  return { createComment };
};

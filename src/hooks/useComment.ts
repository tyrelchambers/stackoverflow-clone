import { useMutation, useQueryClient } from "react-query";
import { createCommentApi } from "../api/createCommentApi";
import { deleteCommentApi } from "../api/deleteCommentApi";

export const useComment = () => {
  const queryClient = useQueryClient();

  const createComment = useMutation((data) => createCommentApi(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("question");
    },
  });

  const deleteComment = useMutation((data) => deleteCommentApi(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("question");
    },
  });

  return { createComment, deleteComment };
};

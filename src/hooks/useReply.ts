import { useMutation, useQueryClient } from "react-query";
import { replyToComment } from "../api/replyToComment";

export const useReply = () => {
  const queryClient = useQueryClient();

  const reply = useMutation((data) => replyToComment(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("question");
    },
  });

  return { reply };
};

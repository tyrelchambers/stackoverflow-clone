import { voteApi } from "../api/voteApi";
import { useMutation, useQueryClient } from "react-query";
import { removeVoteApi } from "../api/removeVoteApi";

export const useVote = () => {
  const queryClient = useQueryClient();

  const vote = useMutation((data) => voteApi(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("question");
    },
  });

  const removeVote = useMutation((data) => removeVoteApi(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("question");
    },
  });

  return { vote, removeVote };
};

import { faDown, faUp } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useVote } from "../hooks/useVote";
import React from "react";
import { VOTE } from "../types/types";
import { useUser } from "../hooks/useUser";

interface Props {
  questionId: string;
  votes: any[];
}

const VoteGroup = ({ questionId, votes }: Props) => {
  const { vote } = useVote();
  const { currentUser } = useUser();

  const voteHandler = (type: VOTE) => {
    vote.mutate({
      type,
      questionId,
      userId: currentUser.uuid,
    });
  };

  const filterUpvotesLength = votes.filter((v) => v.vote === VOTE.UP).length;
  const filterDownvotesLength = votes.filter(
    (v) => v.vote === VOTE.DOWN
  ).length;

  const highlightVote = (voteType: string) => {
    return (
      !!votes.find((v) => v.vote === voteType) && "!bg-rose-400 !text-gray-900"
    );
  };

  return (
    <section className=" w-fit">
      <div className="flex items-center gap-4">
        <button
          className={`flex items-center justify-center gap-2 rounded-full py-1 px-4 dark:bg-zinc-700 ${highlightVote(
            "UP"
          )}`}
          onClick={() => voteHandler(VOTE.UP)}
        >
          <FontAwesomeIcon icon={faUp} />

          {filterUpvotesLength}
        </button>

        <button
          className={`flex items-center justify-center gap-2 rounded-full py-1 px-4 dark:bg-zinc-700 ${highlightVote(
            "DOWN"
          )}`}
          onClick={() => voteHandler(VOTE.DOWN)}
        >
          <FontAwesomeIcon icon={faDown} />

          {filterDownvotesLength}
        </button>
      </div>
    </section>
  );
};

export default VoteGroup;

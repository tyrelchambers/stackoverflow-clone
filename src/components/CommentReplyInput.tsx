import React from "react";
import { Comment } from "@api/prisma/types";
import ReactTextareaAutosize from "react-textarea-autosize";
import { useReply } from "../hooks/useReply";
import { useState } from "react";

interface Props {
  questionId: string;
  comment: Comment;
}

const CommentReplyInput = ({ questionId, comment }: Props) => {
  const [state, setState] = useState();
  const { reply } = useReply();

  const submitHandler = () => {
    reply.mutate({
      parentCommentId: comment.uuid,
      commentReply: state,
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs text-gray-500">
        Replying to{" "}
        <span className="font-bold">{comment.user?.profile.username}</span>. Say
        something nice!
      </p>

      <div className="flex gap-2">
        <ReactTextareaAutosize
          className="w-full rounded-xl border-[1px] border-gray-300 bg-gray-100 px-3 py-1 dark:bg-zinc-700"
          onChange={(e) => setState(e.currentTarget.value)}
          value={state}
        />
        <button
          className="h-8 rounded-full bg-rose-400 py-1 px-3 text-sm text-white"
          onClick={submitHandler}
        >
          Reply
        </button>
      </div>
    </div>
  );
};

export default CommentReplyInput;

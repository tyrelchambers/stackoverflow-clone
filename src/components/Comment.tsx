import { Avatar } from "@mantine/core";
import { generateHTML } from "@tiptap/core";
import React, { useMemo, useState } from "react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { format } from "date-fns";
import { CommentType } from "types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import CreateComment from "./CreateComment";
import CommentReplyInput from "./CommentReplyInput";
import SubReply from "./SubReply";

interface Props {
  comment: CommentType;
  questionId: string;
}

const Comment = ({ comment, questionId }: Props) => {
  const [showCommentField, setShowCommentField] = useState(false);

  const commentBody = useMemo(() => {
    return generateHTML(comment?.body, [Document, Paragraph, Text]);
  }, [comment?.body]);

  return (
    <section>
      <div className="flex flex-col  overflow-hidden rounded-xl border-[1px] border-zinc-200 dark:border-zinc-800 dark:bg-zinc-800">
        <header className="flex items-center justify-between bg-gray-100 p-2 dark:bg-zinc-800 ">
          <div className="flex items-center gap-4">
            <Avatar radius="xl" />
            <p>{comment.user?.profile?.username}</p>
          </div>
          <p className="text-sm italic text-gray-400">
            {format(new Date(comment.createdAt), " MMM do, yyyy")}
          </p>
        </header>

        <section className="p-3 dark:bg-zinc-900">
          <div dangerouslySetInnerHTML={{ __html: commentBody }}></div>
        </section>

        <footer className=" flex p-3 dark:bg-zinc-900">
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800"
            onClick={() => setShowCommentField(!showCommentField)}
          >
            <FontAwesomeIcon icon={faReply} size="1x" />
          </button>
        </footer>

        {showCommentField && (
          <section className="p-4">
            <CommentReplyInput questionId={questionId} comment={comment} />
          </section>
        )}
      </div>

      <section className="mt-4 flex flex-col items-end gap-4">
        {comment.replies?.map((r: CommentType) => (
          <SubReply reply={r} parentComment={comment} />
        )) || null}
      </section>
    </section>
  );
};

export default Comment;

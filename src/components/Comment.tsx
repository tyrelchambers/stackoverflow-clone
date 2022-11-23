import { Avatar } from "@mantine/core";
import { generateHTML } from "@tiptap/core";
import React, { useMemo } from "react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { format } from "date-fns";
import { CommentType } from "types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";

interface Props {
  comment: CommentType;
}

const Comment = ({ comment }: Props) => {
  const commentBody = useMemo(() => {
    return generateHTML(comment?.body, [Document, Paragraph, Text]);
  }, [comment?.body]);

  return (
    <div className="flex flex-col  overflow-hidden rounded-xl border-[1px] border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800">
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
        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800">
          <FontAwesomeIcon icon={faReply} size="1x" />
        </button>
      </footer>
    </div>
  );
};

export default Comment;

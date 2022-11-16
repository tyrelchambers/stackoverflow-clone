import { Avatar } from "@mantine/core";
import { generateHTML } from "@tiptap/core";
import React, { useMemo } from "react";
import { CommentType } from "src/types/types";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { format } from "date-fns";

interface Props {
  comment: CommentType;
}

const Comment = ({ comment }: Props) => {
  const commentBody = useMemo(() => {
    return generateHTML(comment?.body, [Document, Paragraph, Text]);
  }, [comment?.body]);

  return (
    <div className="flex flex-col  dark:bg-zinc-800 rounded-xl border-[1px] border-zinc-200 dark:border-zinc-700 overflow-hidden">
      <header className="flex items-center justify-between bg-gray-100 p-2 ">
        <div className="flex items-center gap-4">
          <Avatar radius="xl" />
          <p>{comment.user?.profile?.username}</p>
        </div>
        <p className="text-gray-400 text-sm italic">
          {format(new Date(comment.createdAt), " MMM do, yyyy")}
        </p>
      </header>

      <section className=" p-3">
        <div dangerouslySetInnerHTML={{ __html: commentBody }}></div>
      </section>
    </div>
  );
};

export default Comment;

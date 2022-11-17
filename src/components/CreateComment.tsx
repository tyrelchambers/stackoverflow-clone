import { Avatar } from "@mantine/core";
import React, { useRef } from "react";
import { useComment } from "../hooks/useComment";
import { useSentiment } from "../hooks/useSentiment";
import { useUser } from "../hooks/useUser";
import { useRefStore } from "../stores/useRefStore";
import Chip from "./Chip";
import TextEditor from "./TextEditor";

interface Props {
  questionId: string;
}

const CreateComment = ({ questionId }: Props) => {
  const { currentUser } = useUser();
  const { commentEditor } = useRefStore();
  const { createComment } = useComment();
  const { analyze } = useSentiment();

  const submitHandler = () => {
    const editorContents = commentEditor?.getJSON();
    const payload = {
      body: editorContents,
      questionId,
    };

    createComment.mutate(payload, {
      onSuccess: () => {
        commentEditor?.commands.clearContent(true);
      },
    });
  };

  const status = (
    editor: any,
    status: "idle" | "error" | "loading" | "success"
  ): "idle" | "error" | "loading" | "success" => {
    if (editor?.getText().length < 10) {
      return "idle";
    }
    return status;
  };

  return (
    <div className="overflow-hidden rounded-lg border-[1px] border-gray-300 dark:border-gray-600">
      <header className="flex w-full items-center border-b-[1px] border-gray-300 bg-gray-100 p-3 dark:border-gray-600 dark:bg-zinc-800">
        <Avatar radius="xl" />
        <p className="text-sm">{currentUser?.profile.username}</p>
      </header>
      <form>
        <section className="min-h-20 h-full">
          <TextEditor analyze={analyze} />
        </section>
      </form>
      <footer className="flex items-center justify-between border-t-[1px] border-gray-300 p-3 dark:border-gray-600">
        <Chip
          state={status(commentEditor, analyze.status)}
          sentiment={analyze.data?.sentiment}
        />
        <button
          type="button"
          className="rounded-full bg-rose-400 p-2 px-4 text-sm text-white"
          onClick={submitHandler}
        >
          Comment
        </button>
      </footer>
    </div>
  );
};

export default CreateComment;

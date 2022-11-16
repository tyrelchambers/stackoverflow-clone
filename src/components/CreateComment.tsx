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

  return (
    <div className="border-[1px] border-gray-300 rounded-lg overflow-hidden dark:border-gray-600">
      <header className="bg-gray-100 dark:bg-zinc-800 p-3 w-full flex items-center border-b-[1px] border-gray-300 dark:border-gray-600">
        <Avatar radius="xl" />
        <p className="text-sm">{currentUser?.profile.username}</p>
      </header>
      <form>
        <section className="min-h-20 h-full">
          <TextEditor analyze={analyze} />
        </section>
      </form>
      {console.log(analyze.data)}
      <footer className="flex p-3 border-t-[1px] border-gray-300 dark:border-gray-600 justify-between items-center">
        <Chip state={analyze.status} sentiment={analyze.data?.sentiment} />
        <button
          type="button"
          className="p-2 rounded-full px-4 text-white bg-rose-400 text-sm"
          onClick={submitHandler}
        >
          Comment
        </button>
      </footer>
    </div>
  );
};

export default CreateComment;

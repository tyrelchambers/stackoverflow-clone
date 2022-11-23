import { Divider, Title } from "@mantine/core";
import { useMatch } from "@tanstack/react-location";
import React from "react";
import Comment from "../../components/Comment";
import CreateComment from "../../components/CreateComment";
import VoteGroup from "../../components/VoteGroup";
import { useQuestion } from "../../hooks/useQuestion";
import DashHeader from "../../layouts/DashHeader";

const Question = () => {
  const {
    params: { id: questionId },
  } = useMatch();

  const { question } = useQuestion({ questionId });

  if (!question) return null;

  return (
    <div>
      <DashHeader expanded={false} />

      <main className="my-20 ml-auto mr-auto max-w-screen-md">
        <section>
          <Title className="mb-4">{question.title}</Title>

          <p className="text-sm text-gray-600 dark:text-gray-300">
            {question.body}
          </p>
        </section>

        <VoteGroup questionId={questionId} votes={question.vote} />

        <Divider className="my-10 dark:border-zinc-800" />

        <section className=" flex flex-col gap-4">
          <Title order={3}>Comments</Title>
          {question.comments?.map((c) => <Comment comment={c} />) || null}
        </section>

        <Divider className="my-10 dark:border-zinc-800" />

        <section className="flex flex-col gap-4">
          <Title order={3}>Leave a comment</Title>
          <CreateComment questionId={questionId} />
        </section>
      </main>
    </div>
  );
};

export default Question;

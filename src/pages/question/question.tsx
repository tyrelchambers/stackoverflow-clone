import { Divider, Title } from "@mantine/core";
import { useMatch } from "@tanstack/react-location";
import React from "react";
import Comment from "../../components/Comment";
import CreateComment from "../../components/CreateComment";
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

      <main className="max-w-screen-md ml-auto mr-auto">
        <section>
          <Title>{question.title}</Title>

          <p>{question.body}</p>
        </section>

        <section className="my-10 flex flex-col gap-4">
          <Title order={3}>Comments</Title>
          {question.comments?.map((c) => <Comment comment={c} />) || null}
        </section>
        <Divider className="mb-10" />
        <section className="flex flex-col gap-4">
          <Title order={3}>Leave a comment</Title>
          <CreateComment questionId={questionId} />
        </section>
      </main>
    </div>
  );
};

export default Question;

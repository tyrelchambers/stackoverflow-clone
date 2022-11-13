import { Title } from "@mantine/core";
import React from "react";
import NewQuestionForm from "../../forms/NewQuestionForm";
import DashHeader from "../../layouts/DashHeader";

const NewQuestion = () => {
  return (
    <div>
      <DashHeader expanded={false} />

      <main className="max-w-lg ml-auto mr-auto my-10">
        <Title>Ask other developers a question</Title>
        <section className="mt-10">
          <NewQuestionForm />
        </section>
      </main>
    </div>
  );
};

export default NewQuestion;

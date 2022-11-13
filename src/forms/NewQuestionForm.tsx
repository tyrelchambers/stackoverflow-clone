import React, { useState } from "react";
import FormGroup from "../components/FormGroup";
import { useQuestion } from "../hooks/useQuestion";
import Select from "react-select";

const NewQuestionForm = () => {
  const [state, setState] = useState({
    title: "",
    body: "",
    tags: [],
  });

  const { createQuestion } = useQuestion();

  const submitHandler = () => {
    createQuestion.mutate(state);
  };

  const changeHandler = (e) => {
    setState({ ...state, [e.currentTarget.name]: e.currentTarget.value });
  };

  return (
    <form>
      <FormGroup
        label="Title"
        htmlFor="title"
        subtitle="Give your question a good title"
      >
        <input
          className="input"
          placeholder="Your title"
          value={state.title}
          onChange={changeHandler}
          name="title"
        />
      </FormGroup>

      <FormGroup
        label="Question"
        htmlFor="body"
        subtitle="Give your question a good title"
      >
        <textarea
          className="input"
          placeholder="What's your question"
          value={state.body}
          onChange={changeHandler}
          name="body"
        />
      </FormGroup>

      <FormGroup label="Tags" htmlFor="tags">
        <Select />
      </FormGroup>

      <button type="button" className="mt-10" onClick={submitHandler}>
        Create
      </button>
    </form>
  );
};

export default NewQuestionForm;

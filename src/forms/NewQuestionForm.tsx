import React, { CSSProperties, useState } from "react";
import FormGroup from "../components/FormGroup";
import { useQuestion } from "../hooks/useQuestion";
import Select, { components, OptionProps } from "react-select";
import { useTags } from "../hooks/useTags";
import Creatable, { useCreatable } from "react-select/creatable";
import { Tooltip } from "@mantine/core";

const NewQuestionForm = () => {
  const [state, setState] = useState({
    title: "",
    body: "",
    tags: "",
  });

  const { createQuestion } = useQuestion();
  const { tags } = useTags();

  const submitHandler = () => {
    createQuestion.mutate(state);
  };

  const changeHandler = (e) => {
    setState({ ...state, [e.currentTarget.name]: e.currentTarget.value });
  };

  const tagsHandler = (e) => {
    const values = e.map((t) => t.value);
    setState({ ...state, tags: values });
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
        <input
          placeholder="Add tags seperated by a comma"
          className="input"
          onChange={(e) => setState({ ...state, tags: e.currentTarget.value })}
        />
      </FormGroup>

      <button type="button" className="mt-10" onClick={submitHandler}>
        Create
      </button>
    </form>
  );
};

export default NewQuestionForm;

import { Title } from "@mantine/core";
import React, { useState } from "react";
import FormGroup from "../components/FormGroup";
import { useUser } from "../hooks/useUser";

const Onboarding = () => {
  const [state, setState] = useState({
    username: "",
  });
  const { currentUser, saveOnboarding } = useUser();

  if (!currentUser) return null;

  const changeHandler = (e) => {
    setState({ ...state, [e.currentTarget.name]: e.currentTarget.value });
  };

  const submitHandler = () => {
    saveOnboarding.mutate(state);
  };

  return (
    <div>
      <Title order={1}>Hey there! 👋</Title>

      <form className=" max-w-lg">
        <FormGroup htmlFor="username" label="Username">
          <input
            className="input"
            name="username"
            value={state.username}
            onChange={changeHandler}
          />
        </FormGroup>
        <button type="button" onClick={submitHandler}>
          Complete
        </button>
      </form>
    </div>
  );
};

export default Onboarding;

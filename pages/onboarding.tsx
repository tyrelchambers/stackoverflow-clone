import { Title } from "@mantine/core";
import React from "react";
import FormGroup from "../components/FormGroup";
import { useUser } from "../hooks/useUser";

const Onboarding = () => {
  const { currentUser } = useUser();
  console.log(currentUser);

  if (!currentUser) return null;

  return (
    <div>
      <Title order={1}>Hey there! 👋</Title>

      <form className=" max-w-lg">
        <FormGroup htmlFor="username" label="Username">
          <input className="input" name="username" />
        </FormGroup>
        <button type="button">Complete</button>
      </form>
    </div>
  );
};

export default Onboarding;

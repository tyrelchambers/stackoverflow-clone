import { AxiosResponse } from "axios";
import { useMutation, useQuery, UseQueryResult } from "react-query";
import { getCurrentUser } from "../api/getCurrentUser";
import { saveOnboarding } from "../api/saveOnboarding";
import { User } from "../types";

export const useUser = () => {
  const user: UseQueryResult<AxiosResponse<User>, unknown> = useQuery(
    "currentUser",
    getCurrentUser
  );
  const _saveOnboarding = useMutation((data) => saveOnboarding(data));

  return { currentUser: user.data, saveOnboarding: _saveOnboarding };
};

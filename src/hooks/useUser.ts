import { useMutation, useQuery } from "react-query";
import { getCurrentUser } from "../api/getCurrentUser";
import { saveOnboarding } from "../api/saveOnboarding";

export const useUser = () => {
  const user = useQuery("currentUser", getCurrentUser);
  const _saveOnboarding = useMutation((data) => saveOnboarding(data));

  return { currentUser: user.data, saveOnboarding: _saveOnboarding };
};

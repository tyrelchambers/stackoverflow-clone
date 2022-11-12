import { useMutation, useQuery } from "react-query";
import { createUser } from "../api/createUser";
import { getCurrentUser } from "../api/getCurrentUser";

export const useUser = () => {
  const user = useQuery("currentUser", getCurrentUser);
  return { currentUser: user.data };
};

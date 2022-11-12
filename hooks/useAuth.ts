import { useRouter } from "next/router";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { createUser } from "../api/createUser";
import { loginUser } from "../api/login";

export const useAuth = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const register = useMutation((data) => createUser(data), {
    onSuccess: (res) => {
      if (res.user) {
        queryClient.setQueryData("currentUser", res.user);
        // router.push("/onboarding");
      }
    },
  });

  const login = useMutation((data) => loginUser(data), {
    onSuccess: () => {
      router.push("/");
    },
  });
  return { register, login };
};

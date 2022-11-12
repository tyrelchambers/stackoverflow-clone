export const getCurrentUser = () => {
  return fetch("http://localhost:4000/api/v1/user/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then((res) => res.json());
};

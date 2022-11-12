export const createUser = (data) => {
  return fetch("http://localhost:4000/api/v1/auth/register", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

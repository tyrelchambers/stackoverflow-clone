export const loginUser = (data) => {
  return fetch("http://localhost:4000/api/v1/auth/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

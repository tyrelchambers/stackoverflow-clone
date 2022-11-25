import { Route } from "@tanstack/react-location";
import Home from "./pages/home";
import Login from "./pages/login";
import Onboarding from "./pages/onboarding";
import ProfileIndex from "./pages/profile";
import NewQuestion from "./pages/question/new";
import Question from "./pages/question/question";
import Register from "./pages/register";

export const routes: Route[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/onboarding",
    element: <Onboarding />,
  },
  {
    path: "/profile",
    children: [
      {
        path: "/",
        element: <ProfileIndex />,
      },
    ],
  },
  {
    path: "/question",
    children: [
      {
        path: "/new",
        element: <NewQuestion />,
      },
      {
        path: ":id",
        element: <Question />,
      },
    ],
  },
];

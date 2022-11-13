import { Route } from "@tanstack/react-location";
import Home from "./pages/home";
import Login from "./pages/login";
import Onboarding from "./pages/onboarding";
import ProfileIndex from "./pages/profile";
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
];
